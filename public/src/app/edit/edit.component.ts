import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  author: any;
  editAuthor: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    console.log('edit init')
    this.author = {name:""};
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.show_id(this.id);
    });
  }

  update(){
    console.log("Update")
    this._httpService.update(this.id, this.author).subscribe(data=>{
      console.log('data', data)
      if('errors' in data){
        this.error = data.errors.name.message;
      } else {
        this.author = data;
        this._router.navigate(['']);
      }
    })
  }

  reroute() {
    this._router.navigate(['']);
  };

  show_id(id){
    console.log('show called with id', id)
    this._httpService.show_id(this.id).subscribe(data=>{
      this.author = data;
      })
  }
  

}
