import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const openTerminalInEditorAreaCommand: string = "workbench.action.createTerminalEditor";
	const openTerminalInEditorShortcut: vscode.StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	openTerminalInEditorShortcut.command = openTerminalInEditorAreaCommand;
	openTerminalInEditorShortcut.text = "$(terminal-view-icon)";
	openTerminalInEditorShortcut.tooltip = "Open Terminal in Editor Area";
	openTerminalInEditorShortcut.show();
}

export function deactivate() {}
