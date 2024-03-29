import { getDefaultArgs, getArgTypesFromAutoMeta } from '@/utils/storybook';
import { GlobalConfig } from '@/config';
import metaCache from './meta.cache';
import { SB } from '@/types/storybook';
import './index'; // 注册组件
import { useState } from 'react';

const argTypes = getArgTypesFromAutoMeta(metaCache);
const storyMeta: SB.StoryMeta = {
  component: `<${GlobalConfig.componentPrefix}-${metaCache.componentName}>`,
  subtitle: metaCache.subtitle,
  description: metaCache.description,
  argTypes,
  args: getDefaultArgs(argTypes),
}
export default storyMeta;



export const 基本用法 = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    function change() {
      setValue(new Date().getTime() + '');
    }
    return (
      <div>
        <div>
          <fl-qr-code {...args} value={value} />
        </div>
        <button onClick={change}>变换生成的文本</button>
      </div>
    )
  },
};

