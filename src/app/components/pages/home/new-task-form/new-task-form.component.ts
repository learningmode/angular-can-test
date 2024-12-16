import { Component } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { CheckboxComponent } from '../../../ui/checkbox/checkbox.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})
export class NewTaskFormComponent {
  form = new FormGroup({
    name: new FormControl('')
    // add controls
  });
}
