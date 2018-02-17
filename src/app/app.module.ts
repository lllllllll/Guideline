import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarLeftComponent } from './shares/sidebar-left/sidebar-left.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './shares/footer/footer.component';
import { LogoGuilelineComponent } from './component/logo-guileline/logo-guileline.component';
import { ColorComponent } from './component/color/color.component';
import { TypographyComponent } from './component/typography/typography.component';
import { IconComponent } from './component/icon/icon.component';
import { ButtonsComponent } from './component/buttons/buttons.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { FormsComponent } from './component/forms/forms.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { NavbarsComponent } from './component/navbars/navbars.component';
import { ModalsComponent } from './component/modals/modals.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { TableComponent } from './component/table/table.component';
import { MenuSharsComponent } from './shares/menu-shars/menu-shars.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  // foundations
  { path: 'logoguideline', component: LogoGuilelineComponent },
  { path: 'colorpalette', component: ColorComponent },
  { path: 'typogrphy', component: TypographyComponent },
  { path: 'icons', component: IconComponent },

  // Components
  { path: 'buttonandlink', component: ButtonsComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'navbars', component: NavbarsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'modal', component: ModalsComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarLeftComponent,
    MenuComponent,
    FooterComponent,
    LogoGuilelineComponent,
    ColorComponent,
    TypographyComponent,
    IconComponent,
    ButtonsComponent,
    BreadcrumbComponent,
    FormsComponent,
    DropdownComponent,
    NavbarsComponent,
    ModalsComponent,
    TabsComponent,
    TableComponent,
    MenuSharsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
