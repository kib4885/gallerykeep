import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getJobs().subscribe((data)=>{
      console.log(data);
      this.jobs = data['jobs'];
    });
  }

}
