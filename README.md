# Webian Shell TV

**Note:** Development is currently continuing downstream at https://github.com/krellian/kiosk

A graphical shell for the web (TV version).

This application is for interactive kiosks and digital signage which can be remotely controlled over the Internet.

It acts as both a web client and a web server in order to render web content and expose system services via the Web of Things.

## Getting Started

To get started hacking on Webian Shell TV first make sure that you have [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed.

Then simply clone the Shell Kiosk repository from GitHub and run it.

```
$ git clone https://github.com/webianproject/shell-tv.git
$ cd shell-tv
$ npm install
$ npm start
```
The client should then start up full screen and the remote web interface should be running at http://localhost:8080

The web client uses Electron and the web server uses NodeJS.

## Copyrights, Trademarks and Licensing

© Ben Francis 2019

Webian is not affiliated with Firefox which is a registered trademark of the [Mozilla Foundation](http://mozilla.org), or Debian which is a registered trademark of [SPI](http://www.spi-inc.org/corporate/trademarks/).

Webian Shell Kiosk is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Webian Shell Kiosk is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Webian Shell Kiosk in the LICENSE file. If not, see
<http://www.gnu.org/licenses/>.
