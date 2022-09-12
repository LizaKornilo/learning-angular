import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {ProductTypeNames} from "./ProductTypeNames.emun";

@Component({
  selector: 'app-ngx-formly-form',
  templateUrl: './ngx-formly-form.component.html',
  styleUrls: ['./ngx-formly-form.component.css']
})
export class NgxFormlyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
      }
    },
    {
      key: 'amount',
      type: 'input',
      templateOptions: {
              type: 'number',
        label: 'Amount',
        placeholder: 'Enter amount',
      }
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
          templateOptions: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'terms',
      type: 'toggle',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter description',
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        placeholder: 'Placeholder',
        description: 'Fill in your gender',
        options: [
          { value: 1, label: 'Male' },
          { value: 2, label: 'Femail' },
          { value: 3, label: 'I don\'t want to share that' },
        ],
      },
    },
    {
      key: 'product_type',
      type: 'select',
      templateOptions: {
        label: 'Product type',
        placeholder: 'Product type',
        description: 'Select the product type',
        required: true,
        options: ProductTypeNames.map((value, index) => {
          return {
             value: index,
             label: value,
           }
         }),
       },
    },
  ];

  onSubmit() {
    console.log(this.model);
  }
}
