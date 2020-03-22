import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('form group should contain two fields', () => {

    expect(component.form.contains('name')).toBeTruthy();

    expect(component.form.contains('email')).toBeTruthy();

  });

  it('should make the name control required', () => {
    const name = component.form.get('name');

    name.setValue('');

    expect(name.valid).toBeFalsy();

  });

});
