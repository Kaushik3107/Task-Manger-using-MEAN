import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: { title: string; description: string }[] = [];
  selectedTab: string = 'all';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    this.tasks = tasks ? JSON.parse(tasks) : [];
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  editTask(index: number) {
    this.router.navigate(['/edit-task', index]);
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  navigateToAddTask() {
    this.router.navigate(['/add-task']);
  }
}
