import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFake} from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get('id')));
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);

      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover
  }

}
