import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  black: '#282828',
  white: '#FFFFFF',
  red: '#FF5757',
  G_01: '#8D8D8D',
  G_02: '#B8B8B8',
  G_03: '#DDDDDD',
  G_04: '#F4F4F4',
  G_05: '#FAFAFA',
};

const fonts = {
  Title: css`
  font-family: 'SUIT';
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  `,
};

const theme = { colors, fonts, mixin };

export default theme;