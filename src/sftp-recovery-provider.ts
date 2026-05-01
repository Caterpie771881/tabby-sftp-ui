import { Injectable } from '@angular/core'
import { NewTabParameters, RecoveryToken, TabRecoveryProvider } from 'tabby-core'

import { SftpManagerTabComponent } from './sftp-manager-tab.component'

const SFTP_RECOVERY_TYPE = 'tabby-sftp-ui:sftp-tab'

@Injectable()
export class SftpTabRecoveryProvider extends TabRecoveryProvider<SftpManagerTabComponent> {
  async applicableTo (recoveryToken: RecoveryToken): Promise<boolean> {
    return recoveryToken?.type === SFTP_RECOVERY_TYPE
  }

  async recover (_recoveryToken: RecoveryToken): Promise<NewTabParameters<SftpManagerTabComponent>> {
    // Restore a stub tab that immediately closes itself and its SplitTab wrapper.
    return {
      type: SftpManagerTabComponent,
      inputs: {
        sshSession: null,
        profile: null,
        recoveredStub: true,
      } as any,
    }
  }
}

export { SFTP_RECOVERY_TYPE }

