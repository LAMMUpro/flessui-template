import { PropsType as CounterPropsType, define } from '../components/wc-counter';
import { PropsType as ButtonPropsType } from '../components/wc-button';
import { PropsType as BadgePropsType } from '../components/wc-badge';

/** 组件ts类型全局声明 */
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "wc-counter": CounterPropsType;
      "wc-button": ButtonPropsType;
      "wc-badge": BadgePropsType;
    }
  }
}