import { Component } from '@angular/core';
import { questions } from './questions';
import { answers } from './answers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testdata';
  pesonalityAnswers: any = [];
  personalityQuestions: any = [];
  statistics = {
    agree: 0,
    netural: 0,
    disagree: 0,
  };
  data: any;

  constructor() {
    this.getPesonalityQuestions();
    this.getPersonalityAnswers();
    console.log(this.statistics);
    this.data={
      "labels": ['Agree','Nutral','Disagree'],
      "datasets": [
          {
              data: [this.statistics["agree"], this.statistics["netural"], this.statistics["disagree"]],
              backgroundColor: [
                  "#56FFAA",
                  "#36A2EB",
                  "#FF5656"
              ],
              hoverBackgroundColor: [
                  "#56FFAA",
                  "#36A2EB",
                  "#FF5656"
              ]
          }
      ]
    }
  } // end of constructor

  getPesonalityQuestions() {
    for (let i = 0; i < 6; i++) {
      this.personalityQuestions.push(questions.fields[4].properties.fields[i]);
    }
  }
  getPersonalityAnswers() {
    let counter = 0;

    let personOp;
    while (counter < answers.items.length) {
      personOp = [];
      for (let j = 0; j < answers.items[counter].answers.length; j++) {
        for (let k = 0; k < this.personalityQuestions.length; k++) {
          if (
            this.personalityQuestions[k].id ===
            answers.items[counter].answers[j].field.id
          ) {
            switch (answers.items[counter].answers[j].choice.label) {
              case 'Strongly agree':
              case 'Agree':
                this.statistics['agree'] = this.statistics['agree'] + 1;
                break;
              case 'Disagree':
              case 'Strongly disagree':
                this.statistics['disagree'] = this.statistics['disagree'] + 1;
                break;
              case 'Neutral':
                this.statistics['netural'] = this.statistics['netural'] + 1;
                break;
            }
          }
        }
      }
      counter += 1;
    }
  }
}
