import * as React from "react";
import { useState, useMemo, useCallback } from "react";

import {
	CheckboxList,
	CheckboxListProps,
	P
} from "@root/index";

export default {
	title : "Components|CheckboxList"
}

export const example = () => {
	const [checked, setChecked] = useState([]);

	const onChange: CheckboxListProps["onChange"] = useCallback(function(checked) {
		setChecked(checked);
	}, [setChecked]);
	
	const options = useMemo(() => [
		{
			label : "Label 1",
			value : "label_1"
		},
		{
			label : "Label 2",
			value : "label_2"
		},
		{
			label : "Label 3",
			value : "label_3"
		}
	], []);

	return (
		<div>
			<P>checked: {checked.join(", ")}</P>
			<CheckboxList
				checked={checked}
				options={options}
				onChange={onChange}
			/>
		</div>
	)
}