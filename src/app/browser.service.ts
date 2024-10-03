import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  url = 'https://amiens.unilasalle.fr';
  canGoBack = true;
  canGoForward = true;

// @ts-ignore
  electronAPI = window.electronAPI;

  toogleDevTool() {
    this.electronAPI.toogleDevTool();
  }

  goBack() {
    this.electronAPI.goBack();
    this.updateHistory();
  }

  goForward() {
    this.electronAPI.goForward();
    this.updateHistory();
  }

  goHome() {
    this.url = 'https://amiens.unilasalle.fr'
    this.electronAPI.goToPage(this.url);
  }

  refresh() {
    this.electronAPI.refresh();
  }

  goToPage(url: string) {
    //this.electronAPI.goToPage(this.validateAndCorrectUrl(url))
    this.electronAPI.goToPage(url)
      .then(() => this.updateHistory());
  }

  setToCurrentUrl() {
    this.electronAPI.currentUrl()
      .then((url :string) => {
        this.url = url;
      });
  }

  updateHistory() {
    this.setToCurrentUrl();

    this.electronAPI.canGoBack()
      .then((canGoBack : boolean) => this.canGoBack = canGoBack);

    this.electronAPI.canGoForward()
      .then((canGoForward : boolean) => this.canGoForward = canGoForward);
  }

  validateAndCorrectUrl(url: string) {
    
    if(!/^https?:\/\//i.test(url)) {

      
      return `http://${url}`;
    }
    return url;
  }
}
