import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-link',
  templateUrl: './task-link.component.html',
  styleUrl: './task-link.component.css'
})
export class TaskLinkComponent implements OnInit {


  table_task: any [] = [];
  new_task = new FormControl('');
  newTask = this.new_task;

  profilForm = new FormGroup({
    task1:new FormControl(''),
    task2 : new FormControl('')
  })
   taskOne = this.profilForm.get('task1');
   taskTwo = this.profilForm.get('task2')


  addTask() {
    if (this.newTask.value !== '' || this.taskOne?.value!=='' || this.taskTwo?.value !=='') {
      this.table_task.push(this.newTask.value);
      this.newTask.setValue('');
      this.taskOne?.setValue('');
      this.taskTwo?.setValue('');
    }
  }

  removeTask(index: number) {
    this.table_task.splice(index, 1);
  }
  onsubmit() {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
