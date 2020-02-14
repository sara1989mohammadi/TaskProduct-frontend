import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/share/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product = {} ;
  constructor(public service: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.productSelected.subscribe(res => {this.product = res});
    
  }

  post(product){
    this.service.post(product).subscribe(
      (res: any) => {
        if (res.isSuccess == true) {
          this.toastr.success('Create Product!', 'Success!');
          this.product = {};
        }
      }
    );
  }

  putproduct(product) {
    this.service.putproduct(product).subscribe(
      (res: any) => {
        if (res.isSuccess == true) {
          this.toastr.success('Update ' + res.data.productName +' Product!', 'Success!');
          this.product = {};
        }
  });}
}
