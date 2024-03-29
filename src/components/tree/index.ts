import {LitElement, css, html, unsafeCSS} from 'lit';
import {property} from 'lit/decorators.js';
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
  
  /** 类型声明，内部有实现 */
  emit: EmitType;

  @property() 
  label: string = '';

  @property({ type: Array })
  arr: Array<number> = [];

  private submit () {
    this.emit('success', { list: ['aaa', 'bbb'] });
  }


  /**
   * @part abc
   * @describe 标题
   */
  /**
   * @slot default
   * @describe 默认插槽
   */
  /**
   * @slot abc
   * @describe 标题插槽
   */
  render() {
    return html`
      <div class="root" fl-cn>
        <span>${this.label}</span>
        <slot></slot>
        <slot name="abc"></slot>
      </div>
    `;
  }

  static styles = [css`${unsafeCSS(stylesInline)}`];
}

