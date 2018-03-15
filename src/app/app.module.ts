import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// pages
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { ButtonLinkComponent } from './pages/button-link/button-link.component';
import { ColorPaletteComponent } from './pages/color-palette/color-palette.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { FormsComponent } from './pages/forms/forms.component';
import { IconsComponent } from './pages/icons/icons.component';
import { LogoGuidelineComponent } from './pages/logo-guideline/logo-guideline.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ModalComponent } from './pages/modal/modal.component';
import { NavbarsComponent } from './pages/navbars/navbars.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { TabsComponent } from './pages/tabs/tabs.component';

// shares
import { SidebarLeftComponent } from './shares/sidebar-left/sidebar-left.component';
import { FooterComponent } from './shares/footer/footer.component';

// component
import { KaTableComponent } from './component/ka-table/ka-table.component';
import { KaBreadcrumbComponent } from './component/ka-breadcrumb/ka-breadcrumb.component';
import { KaButtonComponent } from './component/ka-button/ka-button.component';
import { KaDropdownComponent } from './component/ka-dropdown/ka-dropdown.component';
import { KaIconComponent } from './component/ka-icon/ka-icon.component';
import { KaMenusComponent } from './component/ka-menus/ka-menus.component';
import { KaModalComponent } from './component/ka-modal/ka-modal.component';
import { KaTabsComponent } from './component/ka-tabs/ka-tabs.component';
import { KaTextareaComponent } from './component/ka-textarea/ka-textarea.component';
import { KaInputComponent } from './component/ka-input/ka-input.component';
import { KaCheckboxComponent } from './component/ka-checkbox/ka-checkbox.component';
import { KaRadioComponent } from './component/ka-radio/ka-radio.component';
import { KaSelectComponent } from './component/ka-select/ka-select.component';

// dropdown
import { DropdownDirective } from './directives/dropdown.directive';


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  // foundations
  { path: 'logoguideline', component: LogoGuidelineComponent },
  { path: 'colorpalette', component: ColorPaletteComponent },
  { path: 'typogrphy', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },

  // Components
  { path: 'button-link', component: ButtonLinkComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'navbars', component: NavbarsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // shares
    SidebarLeftComponent,
    FooterComponent,
    // pages
    BreadcrumbComponent,
    ButtonLinkComponent,
    ColorPaletteComponent,
    DashboardComponent,
    DropdownComponent,
    FormsComponent,
    IconsComponent,
    LogoGuidelineComponent,
    MenuComponent,
    ModalComponent,
    NavbarsComponent,
    TableComponent,
    TypographyComponent,
    TabsComponent,
    // component
    KaTableComponent,
    KaBreadcrumbComponent,
    KaButtonComponent,
    KaDropdownComponent,
    KaIconComponent,
    KaMenusComponent,
    KaModalComponent,
    KaTabsComponent,
    KaTextareaComponent,
    KaInputComponent,
    KaCheckboxComponent,
    KaRadioComponent,
    KaSelectComponent,

    // dropdown
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
