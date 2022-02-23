import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { GroupsComponent } from './groups/groups.component';
import { UiCardsContainersModule } from 'src/app/containers/ui/cards/ui.cards.containers.module';
import { FormsModule } from '@angular/forms';
import { UiModalsContainersModule } from 'src/app/containers/ui/modals/ui.modals.containers.module';
import { BootstrapModule } from 'src/app/components/bootstrap/bootstrap.module';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import { ProfileComponent } from './profile/profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormValidationsContainersModule } from 'src/app/containers/form-validations/form.validations.containers.module';
import { FormsContainersModule } from 'src/app/containers/forms/forms.containers.module';
import { GrupoSelectComponent } from './grupo-select/grupo-select.component';


@NgModule({
  declarations: [BlankPageComponent, AppComponent, GroupsComponent, ProfileComponent, GrupoSelectComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    UiCardsContainersModule,
    FormsModule,
    UiModalsContainersModule,
    ComponentsStateButtonModule,
    BootstrapModule,
    NgSelectModule,
    BsDatepickerModule,
    FormValidationsContainersModule,
    FormsContainersModule
  ]
})
export class AppModule { }

