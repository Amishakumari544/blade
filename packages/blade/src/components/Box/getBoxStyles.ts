import type { CSSObject } from 'styled-components';
import type { Theme } from '..';
import type { BoxProps } from './Box';
import { getIn, makeSize, makeSpace } from '~utils';

// allows 'auto' as spacing value
const getAutoSpacingValue = <T extends string | undefined>({
  value,
  theme,
}: {
  value: T;
  theme: Theme;
}): string | undefined => {
  if (value === 'auto') return 'auto';
  return value ? makeSpace(getIn(theme, value)) : undefined;
};

const getBoxStyles = ({
  theme,
  display,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  alignSelf,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  gap,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
}: BoxProps & { theme: Theme }): CSSObject => ({
  display,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  alignSelf,
  paddingTop: getAutoSpacingValue({ value: paddingTop, theme }),
  paddingBottom: getAutoSpacingValue({ value: paddingBottom, theme }),
  paddingLeft: getAutoSpacingValue({ value: paddingLeft, theme }),
  paddingRight: getAutoSpacingValue({ value: paddingRight, theme }),
  marginTop: getAutoSpacingValue({ value: marginTop, theme }),
  marginBottom: getAutoSpacingValue({ value: marginBottom, theme }),
  marginLeft: getAutoSpacingValue({ value: marginLeft, theme }),
  marginRight: getAutoSpacingValue({ value: marginRight, theme }),
  gap: getAutoSpacingValue({ value: gap, theme }),
  minHeight: minHeight ? makeSize(minHeight) : undefined,
  minWidth: minWidth ? makeSize(minWidth) : undefined,
  maxHeight: maxHeight ? makeSize(maxHeight) : undefined,
  maxWidth: maxWidth ? makeSize(maxWidth) : undefined,
});

export default getBoxStyles;
