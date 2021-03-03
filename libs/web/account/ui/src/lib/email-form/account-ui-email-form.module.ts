import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@demo/web/ui/button'
import { WebUiFormModule } from '@demo/web/ui/form'
import { AccountUiEmailFormComponent } from './account-ui-email-form.component'

@NgModule({
  exports: [AccountUiEmailFormComponent],
  declarations: [AccountUiEmailFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule, WebUiButtonModule],
})
export class AccountUiEmailFormModule {}