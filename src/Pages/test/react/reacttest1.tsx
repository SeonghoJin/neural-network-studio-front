const MyComponent = (props: any) => {
	// eslint-disable-next-line react/destructuring-assignment
	return <div>{props.name}</div>;
};

const test1 = () => {
	return <MyComponent />;
};

MyComponent.defaultProps = {
	name: '진성호',
};

export default test1;
