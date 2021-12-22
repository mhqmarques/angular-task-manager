import { Component, OnInit } from '@angular/core';

import {TarefaService, Tarefa} from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listAll();
  }

  listAll(): Tarefa[] {
    return this.tarefaService.listAll();
  }

  delete($event: MouseEvent, tarefa: Tarefa):void {
    $event.preventDefault();
    if(confirm(`Deseja Remover a tarefa ${tarefa.name} ?`)) {
      this.tarefaService.remove(tarefa.id);
      this.tarefas = this.listAll();
    }
  }

  changeStatus(tarefa: Tarefa): void{
    this.tarefaService.updateStatus(tarefa.id);
    this.tarefas = this.listAll();
  }
}
