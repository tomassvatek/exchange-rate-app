import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

type BoxProps = {
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
};

export const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  border-radius: ${(props) => props.borderRadius};
`;

type FlexProps = {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  flexBasis?: string;
  flexGrow?: number;
  flexShrink?: number;
  gap?: string;
};

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  flex-basis: ${(props) => props.flexBasis};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  gap: ${(props) => props.gap};
`;

export const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.gray};
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
`;

export const Container = styled.div`
  padding: 2rem 4rem;
  margin: 0 auto;
  max-width: 1200px;
`;
