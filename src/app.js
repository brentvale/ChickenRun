import Hello from './js/hello'

(new Hello({
  target: document.getElementsByTagName('main')[0]
})).run();