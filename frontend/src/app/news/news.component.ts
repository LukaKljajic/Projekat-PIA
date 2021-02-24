import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { News } from '../model/news.model';
import { NewsCategory } from '../model/newsCategory.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getAllNews().subscribe((news: News[]) => {
      this.news = []
      for (let i = 0; i < news.length; i++){
        let today = new Date()
        let date = new Date(news[i].date)
        if ((today.getTime() - date.getTime()) < 3 * 30 * 24 * 60 * 60 * 1000)
          this.news.push(news[i])
      }
      
      for (let i = 0; i < this.news.length; i++) {
        this.service.getNameForCategoryNumber(this.news[i].numberOfCategory).subscribe((category: NewsCategory) => {
          this.news[i].categoryName = category.name
        })
      }
    })
  }

  news: News[]

  formatDate(date: Date) {
    date = new Date(date)
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + '.';
  }
}
