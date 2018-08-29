import { AngularFireDatabase } from 'angularfire2/database';  
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FirebaseApp } from 'angularfire2';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  name: string;
  jsonapi = [];
  arr = [];

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,private db : AngularFireDatabase) { }

  SearchAllUser = function () {
    // this.http.get('http://localhost:3000/jsonapi').subscribe(
    //   (res: Response) => {
    //     this.jsonapi = res.json();
    //   }
    // );
    this.db.list('JsonApi').valueChanges().subscribe(data => {  
      debugger;  
       
      this.jsonapi = data;  
     
  });  
  };



  deletedata = function (id:string ) {
    debugger;
    if (confirm('are you sure want to Delete ? ' + id)) {
    //   const url = `${'http://localhost:3000/jsonapi'}/${id}`;
      // return this.http.delete(url).subscribe
      //   (
      //   (res: Response) => {
      //     this.jsonapi = this.jsonapi.filter(item => item.id !== id);
      //     // this.SearchAllUser();
      //   }
      //   );
      var nameRef = this.db.list('/JsonApi');
      nameRef.child('id').remove(id);
  //this.db.list('/JsonApi/').valueChanges()
    }
  };
  SearchByName = function (name) {
    const url = `${'http://localhost:3000/jsonapi'}/${name}`;
    return this.http.get(url).subscribe(
      (res: Response) => { this.jsonapi = res.json(); });
  };
  ngOnInit() {
    this.SearchAllUser();
  }

}
