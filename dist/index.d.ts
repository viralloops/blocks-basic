import { Plugin } from 'grapesjs';

export type PluginOptions = {
	/**
	 * Which blocks to add.
	 * @default ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map']
	 */
	blocks?: string[];
	/**
	 * Make use of flexbox for the grid
	 * @default false
	 */
	flexGrid?: boolean;
	/**
	 * Classes prefix
	 * @default 'gjs-'
	 */
	stylePrefix?: string;
	/**
	 * Use basic CSS for blocks
	 * @default true
	 */
	addBasicStyle?: boolean;
	/**
	 * Blocks category name
	 * @default 'Basic'
	 */
	category?: string;
	/**
	 * 1 Column label
	 * @default '1 Column'
	 */
	labelColumn1?: string;
	/**
	 * 2 Columns label
	 * @default '2 Columns'
	 */
	labelColumn2?: string;
	/**
	 * 3 Columns label
	 * @default '3 Columns'
	 */
	labelColumn3?: string;
	/**
	 * 3/7 Columns label
	 * @default '2 Columns 3/7'
	 */
	labelColumn37?: string;
	/**
	 * Text label
	 * @default 'Text'
	 */
	labelText?: string;
	/**
	 * Link label
	 * @default 'Link'
	 */
	labelLink?: string;
	/**
	 * Image label
	 * @default 'Image'
	 */
	labelImage?: string;
	/**
	 * Video label
	 * @default 'Video'
	 */
	labelVideo?: string;
	/**
	 * Map label
	 * @default 'Map'
	 */
	labelMap?: string;
	/**
	 * Image with Link label
	 * @default 'Image with Link'
	 */
	labelImageLink?: string;
	/**
	 * Initial row height
	 * @default 75
	 */
	rowHeight?: number;
};
declare const plugin: Plugin<PluginOptions>;

export {
	plugin as default,
};

export {};
