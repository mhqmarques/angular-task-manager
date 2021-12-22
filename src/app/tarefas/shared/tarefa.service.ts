import { Injectable } from '@angular/core';

import {Tarefa} from './' 

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }
  
  listAll(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  create(tarefa: Tarefa):void {
    const tarefas = this.listAll();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  findById(id: number): Tarefa | undefined {
    const tarefas: Tarefa[] = this.listAll();
    return tarefas.find(tarefa => tarefa.id === id);    
   
  }

  update(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listAll();
    tarefas.forEach((objTarefa, i, arr) => {
      if(tarefa.id === objTarefa.id) {
        arr[i] = tarefa;
      }
    })
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remove(id: number): void {
    let tarefas = this.listAll();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  updateStatus(id: number): void {
    const tarefas = this.listAll();
    tarefas.forEach((objTarefa, i, arr) => {
      if(objTarefa.id === id) {
        arr[i].concluida = !objTarefa.concluida;
      }
    })
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

}
