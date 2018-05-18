/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class NgdHomeComponent {

  features = [
    {
      title: 'Introduction',
      description: 'A set of essential modules for your next Angular App',
      icon: 'assets/img/intro.svg',
      link: 'docs',
    },
    {
      title: 'Guides',
      description: 'A set of essential modules for your next Angular App',
      icon: 'assets/img/guides.svg',
      link: 'docs',
    },
    {
      title: 'Themes',
      description: 'A set of essential modules for your next Angular App',
      icon: 'assets/img/themes.svg',
      link: 'docs',
    },
    {
      title: 'Components',
      description: 'A set of essential modules for your next Angular App',
      icon: 'assets/img/components.svg',
      link: 'docs',
    },
    {
      title: 'Auth',
      description: 'A set of essential modules for your next Angular App',
      icon: 'assets/img/auth.svg',
      link: 'docs',
    },
    {
      title: 'Security',
      description: 'A set of essential modules for your next Angular App',
      icon: 'assets/img/security.svg',
      link: 'docs',
    },
  ];

  advantages = [
    {
      title: 'Modular',
      description: `Far far away, behind the word mountains,
      far from the countries Vokalia and Consonantia,
      there live the blind texts.`,
    },
    {
      title: 'Modular',
      description: `Far far away, behind the word mountains,
      far from the countries Vokalia and Consonantia,
      there live the blind texts.`,
    },
    {
      title: 'Modular',
      description: `Far far away, behind the word mountains,
      far from the countries Vokalia and Consonantia,
      there live the blind texts.`,
    },
    {
      title: 'Modular',
      description: `Far far away, behind the word mountains,
      far from the countries Vokalia and Consonantia,
      there live the blind texts.`,
    },
  ];

  constructor(themeService: NbThemeService) {
    themeService.changeTheme('docs-home');
  }
}
