import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  private add(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity: severity, summary: summary, detail: detail });
  }

  success(summary: string, detail: string): void {
    this.add('success', summary, detail)
  }

  showMultipleError(error: {}[]) {
    this.messageService.addAll(error)
  }

}
