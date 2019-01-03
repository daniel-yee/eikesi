import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */
import imagePasteConfirm, { ImagePasteConfirmState } from 'app/shared/reducers/ImagePasteConfirm';
import chat, { ChatState } from 'app/shared/reducers/chat';
import snackbar, { SnackbarState } from 'app/shared/reducers/snackbar';
import historyMessage, {
  HistoryMessageState
} from 'app//shared/reducers//history-message.reducer';
// prettier-ignore
import currentMessage, {
  CurrentMessageState
} from 'app//shared/reducers//current-message.reducer';
// prettier-ignore
import dialogue, {
  DialogueState
} from 'app/shared/reducers/dialogue.reducer';
// prettier-ignore
import customerRelation, {
  CustomerRelationState
} from 'app/shared/reducers/customer-relation.reducer';
// prettier-ignore
import flockRelation, {
  FlockRelationState
} from 'app/shared/reducers/flock-relation.reducer';
// prettier-ignore
import customerFlock, {
  CustomerFlockState
} from 'app/shared/reducers/customer-flock.reducer';
// prettier-ignore
import customer, {
  CustomerState
} from 'app/shared/reducers/customer.reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;

  
  readonly imagePasteConfirm: ImagePasteConfirmState;
  readonly historyMessage: HistoryMessageState;
  readonly currentMessage: CurrentMessageState;
  readonly dialogue: DialogueState;
  readonly customerRelation: CustomerRelationState;
  readonly flockRelation: FlockRelationState;
  readonly customerFlock: CustomerFlockState;
  readonly customer: CustomerState;
  readonly snackbar: SnackbarState;
  readonly chat: ChatState;

  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  imagePasteConfirm,
  historyMessage,
  currentMessage,
  dialogue,
  customerRelation,
  flockRelation,
  customerFlock,
  customer,
  snackbar,
  chat,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar
});

export default rootReducer;