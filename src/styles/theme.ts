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
  big_title: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 3rem;
  font-style: normal;
  font-weight: bold;
  line-height: 2.8rem;
  letter-spacing: -3%;
  `,
  title: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 2.4rem;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -3%;
  `,  
  font_01: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 2rem;
  font-style: normal;
  font-weight: normal;
  line-height: 2.8rem;
  letter-spacing: -3%;
  `,  
  font_02: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -3%;
  `,  
  font_03: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: normal;
  line-height: 2.4rem;
  letter-spacing: -3%;
  `,  
  font_04: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -3%;
  `,  
  font_05: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -3%;
  `,  
  font_06: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -3%;
  `,  
  font_07: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -3%;
  `,  
  font_08: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -3%;
  `,
  font_09: css`
  font-family: 'SpoqaHanSansNeo';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -3%;
  `,
};

const theme = { colors, fonts, mixin };

export default theme;