import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import stylesInline from './index.scss?inline';
import { ct } from '@/utils';
import { LitWebcomponent } from '@/decorator/webcomponent';

export type EmitType = {
  /**
   * @event success
   * @describe 成功时回调
   * @detail { list: Array<string> }
   */
  (e: 'success', data: { list: Array<string> }): void
  /**
   * @event submit
   * @describe 
   * 成功时回调
   * 如果失败则，
   * 如果成功则......
   * @detail 
   * {
   *  list: Array<string>
   *  data: Array<string>
   * }
   */
  (e: 'submit'): void
}

@LitWebcomponent('tree', import('./index.scss?inline'))
export class Tree extends LitElement {
  
  emit: EmitType = (name: string, ...args: any[]) => {
    this.dispatchEvent(new CustomEvent(name, ...args));
  }

  @property({ reflect: true }) 
  name: string = 'world! ';

  @property({ type: Array })
  arr: Array<number> = [];

  submit () {
    this.emit('success', true);
  }

  render() {
    return html`
      <span fl-cn>test</span>
      <div class=${ct('flessui-tree')} fl-cn>
        <p 
          class=${ct('fl-red')}
          @click=${() => console.log(this.arr)}
        >Hello, ${this.name}</p>
        <div>
          <div><slot></slot></div>
          <section><slot name="hhh"></slot></section>
        </div>
      </div>
    `;
  }

  static styles = [css`${unsafeCSS(stylesInline)}`];
}

