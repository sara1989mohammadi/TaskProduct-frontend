import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/share/product.service';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { async } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
// tslint:disable-next-line:no-empty-interface
export interface Product {
  productId: number;
  driverId: string;
  productName: string;
  version: string;
  size: string;
  companyName: string;
  productCategory: string;
  url: string;
  vendorContact: string;
}

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  Products: Product[] = [];
  constructor(private service: ProductService, private toastr: ToastrService) {    }
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['driverId', 'productName', 'size', 'companyName', 'version', 'productCategory', 'url', 'edit', 'delete', 'vendorContact'];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getProduct();
  }

  getProduct(): Array<Product>{
    this.service.getProduct().subscribe(
      res => {
       this.Products = res as Product[];
       this.dataSource.data = this.Products;
      }
    );
    return this.Products;
  }

  selectProduct(product){
    this.service.selecetProduct(product);
  }
  deleteProduct(element){
    this.service.deleteProduct(element.productId).subscribe(
      (res:any) => {
        if (res.isSuccess == true) {
          this.toastr.success('Delete ' + element.productName +' Product!', 'Success!');
          this.getProduct();
        } else {
          this.toastr.error('Error')
        }
      }
    )
  }
}
