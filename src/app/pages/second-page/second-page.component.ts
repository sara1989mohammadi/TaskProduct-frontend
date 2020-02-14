import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ProductService } from 'src/app/share/product.service';

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
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  Products: Product[] = [];
  constructor(private service: ProductService) {    }
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['driverId', 'productName', 'size', 'companyName', 'version', 'productCategory', 'url', 'vendorContact'];
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
