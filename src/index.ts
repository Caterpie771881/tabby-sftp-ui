import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { HotkeyProvider, TabContextMenuItemProvider, TabRecoveryProvider } from 'tabby-core'
import { TerminalDecorator } from 'tabby-terminal'

import { SftpManagerTabComponent } from './sftp-manager-tab.component'
import { SftpContextMenuProvider } from './sftp-context-menu'
import { SftpUiHotkeyProvider } from './sftp-hotkey'
import { SftpUiService } from './sftp-ui.service'
import { SftpTerminalDecorator } from './sftp-terminal-decorator'
import { SftpTabRecoveryProvider } from './sftp-recovery-provider'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SftpManagerTabComponent,
  ],
  providers: [
    { provide: TabContextMenuItemProvider, useClass: SftpContextMenuProvider, multi: true },
    { provide: HotkeyProvider, useClass: SftpUiHotkeyProvider, multi: true },
    { provide: TerminalDecorator, useClass: SftpTerminalDecorator, multi: true },
    { provide: TabRecoveryProvider, useClass: SftpTabRecoveryProvider, multi: true },
    SftpUiService,
  ],
})
export default class SftpUiModule {
  constructor (_: SftpUiService) { }
}

export { SftpManagerTabComponent }
