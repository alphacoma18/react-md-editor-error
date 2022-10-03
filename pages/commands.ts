// import { commands } from "@uiw/react-md-editor";
import * as commands from "@uiw/react-md-editor/esm/commands/index";

const editorCommands: commands.ICommand<string>[] = [
	{
		...commands.bold,
		shortcuts: "Ctrl+B",
		buttonProps: {
			title: "Add bold text (Ctrl + B)",
			"aria-label": "Add bold text (Ctrl + B)",
		},
	},
	{
		...commands.italic,
		shortcuts: "Ctrl+I",
		buttonProps: {
			title: "Add italic text (Ctrl + I)",
			"aria-label": "Add italic text (Ctrl + I)",
		},
	},
	{
		...commands.hr,
		shortcuts: "Ctrl+H",
		buttonProps: {
			title: "Add horizontal rule (Ctrl + H)",
			"aria-label": "Add horizontal rule (Ctrl + H)",
		},
	},
	{
		...commands.strikethrough,
		shortcuts: "Ctrl+Shift+S",
		buttonProps: {
			title: "Add strikethrough (Ctrl + Shift + S)",
			"aria-label": "Add strikethrough (Ctrl + Shift + S)",
		},
    },
	commands.group(
		[
			{
				...commands.title1,
				shortcuts: "Ctrl+1",
				buttonProps: {
					title: "Add title 1 (Ctrl + 1)",
					"aria-label": "Add title 1 (Ctrl + 1)",
				},
			},
			{
				...commands.title2,
				shortcuts: "Ctrl+2",
				buttonProps: {
					title: "Add title 2 (Ctrl + 2)",
					"aria-label": "Add title 2 (Ctrl + 2)",
				},
			},
			{
				...commands.title3,
				shortcuts: "Ctrl+3",
				buttonProps: {
					title: "Add title 3 (Ctrl + 3)",
					"aria-label": "Add title 3 (Ctrl + 3)",
				},
			},
			{
				...commands.title4,
				shortcuts: "Ctrl+4",
				buttonProps: {
					title: "Add title 4 (Ctrl + 4)",
					"aria-label": "Add title 4 (Ctrl + 4)",
				},
			},
			{
				...commands.title5,
				shortcuts: "Ctrl+5",
				buttonProps: {
					title: "Add title 5 (Ctrl + 5)",
					"aria-label": "Add title 5 (Ctrl + 5)",
				},
			},
			{
				...commands.title6,
				shortcuts: "Ctrl+6",
				buttonProps: {
					title: "Add title 6 (Ctrl + 6)",
					"aria-label": "Add title 6 (Ctrl + 6)",
				},
			},
		],
		{
			name: "title",
			groupName: "title",
			buttonProps: {
				title: "Add title",
				"aria-label": "Insert title",
			},
		}
	),
	commands.divider,
	{
		...commands.link,
		shortcuts: "Ctrl+L",
		buttonProps: {
			title: "Add link (Ctrl + L)",
			"aria-label": "Add link (Ctrl + L)",
		},
	},
	{
		...commands.quote,
		shortcuts: "Ctrl+Q",
		buttonProps: {
			title: "Add quote (Ctrl + Q)",
			"aria-label": "Add quote (Ctrl + Q)",
		},
	},
	{
		...commands.code,
		shortcuts: "Ctrl+K",
		buttonProps: {
			title: "Add code (Ctrl + K)",
			"aria-label": "Add code (Ctrl + K)",
		},
	},
	{
		...commands.codeBlock,
		shortcuts: "Ctrl+Shift+K",
		buttonProps: {
			title: "Add code block (Ctrl + Shift + K)",
			"aria-label": "Add code block (Ctrl + Shift + K)",
		},
	},
	{
		...commands.image,
		shortcuts: "Ctrl+G",
		buttonProps: {
			title: "Add image (Ctrl + G)",
			"aria-label": "Add image (Ctrl + G)",
		},
	},
	commands.divider,
	{
		...commands.orderedListCommand,
		shortcuts: "Ctrl+Shift+O",
		buttonProps: {
			title: "Add ordered list (Ctrl + Shift + O)",
			"aria-label": "Add ordered list (Ctrl + Shift + O)",
		},
	},
	{
		...commands.unorderedListCommand,
		shortcuts: "Ctrl+Shift+U",
		buttonProps: {
			title: "Add unordered list (Ctrl + Shift + U)",
			"aria-label": "Add unordered list (Ctrl + Shift + U)",
		},
	},
	{
		...commands.checkedListCommand,
		shortcuts: "Ctrl+Shift+C",
		buttonProps: {
			title: "Add checked list (Ctrl + Shift + C)",
			"aria-label": "Add checked list (Ctrl + Shift + C)",
		},
    },
];
export default editorCommands;
