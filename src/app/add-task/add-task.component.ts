import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskTitle: string = '';
  taskDescription: string = '';
  editIndex: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['index'] !== undefined) {
        this.editIndex = +params['index'];
        const tasks = localStorage.getItem('tasks');
        const tasksArray = tasks ? JSON.parse(tasks) : [];
        const task = tasksArray[this.editIndex];
        if (task) {
          this.taskTitle = task.title;
          this.taskDescription = task.description;
        }
      }
    });
  }

  addTask() {
    const tasks = localStorage.getItem('tasks');
    const tasksArray = tasks ? JSON.parse(tasks) : [];
    if (this.editIndex !== null) {
      tasksArray[this.editIndex] = {
        title: this.taskTitle,
        description: this.taskDescription,
      };
    } else {
      tasksArray.push({
        title: this.taskTitle,
        description: this.taskDescription,
      });
    }
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    alert(
      'Task ' +
        (this.editIndex !== null ? 'updated' : 'added') +
        ' successfully'
    );
    this.router.navigate(['/']);
  }
}
