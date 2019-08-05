import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-input/paper-input.js'
import '@polymer/polymer/lib/elements/dom-repeat.js'
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * `todo-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TodoElement extends PolymerElement {

  static get template() {
    var i = 0;
    return html `
      <style>
        :host {
          display: block;
        }
        .task{
          display:flex;
          align-items:center;
        }
        paper-input{
          display: inline-block;
          width:360px;
        }
        paper-button{
          margin-top:5px;
          border:1px solid black;
        }
        paper-checkbox{
          margin-right:15px;
        }
        paper-icon-button{
          margin-top:2px;
          margin-left:8px;
        
        }
        paper-button{
          margin-left:35px;
          margin-top:15px;
          
        }
       
        
      </style>
      <div class="todo list">
          <dom-repeat items={{tasks}} as="taketask" filter="isNotDone" observe="done">
            <template>
            <div class="task">
              <paper-checkbox checked="{{taketask.done}}"></paper-checkbox>
              <paper-input label="Task" value="{{taketask.initial}}"></paper-input>
              <paper-icon-button icon="{{taketask.icon}}"  on-click="removeTask"></paper-icon-button>
            </div>
            </template>
          </dom-repeat>
              <paper-button on-click="addTask">ADD a task here</paper-button>
              
              <h3>[[subtopic]]</h3>
               <dom-repeat items={{tasks}} as="taketask" filter="isDone" observe="done">
                <template>
                  <div class="task">
                  <paper-checkbox checked="{{taketask.done}}"></paper-checkbox>
                  <paper-input label="Task" value="{{taketask.initial}}"></paper-input>
                  <paper-icon-button icon="{{taketask.icon}}" on-click="removeTask"></paper-icon-button>
                  </div>
                </template>
               </dom-repeat>
      </div>
    
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'Todo-list',
      },
      subtopic: {
        type: String,
        value: 'Completed Task'
      },
      tasks: {
        type: Array,
        value: () => [{
          done: false,
          initial: "Task",
          icon: "delete"
        }]
      },
    };
  }
  addTask() {
    var newTask = {
      done: false,
      initial: "",
      icon: "delete"
    }

    this.push('tasks', newTask);
  }
  removeTask(e) {
    e.target.parentNode.remove();
  }

  isNotDone(currentTask) {
    return !currentTask.done;
  }
  isDone(currentTask) {
    return currentTask.done;
  }
}

window.customElements.define('todo-element', TodoElement);