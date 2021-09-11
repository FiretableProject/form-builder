import React, { lazy } from 'react';
import { IFieldConfig } from '../../types';
import { FieldType } from '../../constants/fields';

import SvgIcon from '@mui/material/SvgIcon';
import { mdiFormatHeader1 } from '@mdi/js';

import Settings from './ContentHeaderSettings';
const Component = lazy(
  () =>
    import(
      './ContentHeaderComponent'
    ) /* webpackChunkName: FormBuilder-ContentHeader */
);

export const ContentHeaderConfig: IFieldConfig = {
  type: FieldType.contentHeader,
  name: 'Header',
  group: 'content',
  icon: (
    <SvgIcon>
      <path d={mdiFormatHeader1} />
    </SvgIcon>
  ),
  dataType: 'undefined',
  defaultValue: undefined,
  component: Component,
  settings: Settings,
  validation: () => [],
};
export default ContentHeaderConfig;
