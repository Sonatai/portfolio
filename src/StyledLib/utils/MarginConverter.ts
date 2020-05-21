import { MarginProps } from 'styled-system';

export function extractMarginProps(props: any & MarginProps): MarginProps {
	const marginProps: any = {
		m: props.m,
		margin: props.margin,
		mt: props.mt,
		marginTop: props.marginTop,
		mr: props.mr,
		marginRight: props.marginRight,
		mb: props.mb,
		marginBottom: props.marginBottom,
		ml: props.ml,
		marginLeft: props.marginLeft,
		mx: props.mx,
		my: props.my,
	};

	Object.keys(marginProps).forEach(
		(key) => marginProps[key] == undefined && delete marginProps[key]
	);

	return marginProps;
}
