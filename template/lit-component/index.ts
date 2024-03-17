import { LitElement, css, html, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";
import stylesInline from "./index.scss?inline";
import { ct } from "@/utils";
import { LitWebcomponent } from "@/decorator/webcomponent";

/**
 * 组件事件定义
 */
export type EmitType = {
  /**
   * 成功响应
   */
  (e: "success", detail: { data: { label: string, value: string } }): void;
};

/**
 * 组件文本主色
 * @cssvar --primary-text-color
 * @argsType color
 * @default #5b5b5b
 */
/**
 * ${组件描述}
 * @subtitle ${组件副标题}
 */
@LitWebcomponent("temp-name", import("./index.scss?inline"))
export class TempName extends LitElement {
  emit: EmitType;

  /** 
   * 文本内容
   */
  @property()
  value: string;

  /**
   * 尺寸
   * @control inline-radio
   * @options ['small', 'medium', 'large']
   */
  @property()
  size: 'small' | 'medium' | 'large' = 'medium';

  protected render() {
    return html`
      <div fl-cn className=${ct(this.size)}>
        <span>
          <span>文本内容:</span>
          <span>${this.value}</span>
        </span>
        <slot></slot>
      </div>
    `;
  }

  static styles = [css`${unsafeCSS(stylesInline)}`];
}

