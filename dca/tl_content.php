<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');

/**
 * TYPOlight webCMS
 * Copyright (C) 2005-2009 Leo Feyer
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program. If not, please visit the Free
 * Software Foundation website at http://www.gnu.org/licenses/.
 *
 * PHP version 5
 * @copyright  Andreas Schempp 2009
 * @author     Andreas Schempp <andreas@schempp.ch>
 * @license    http://opensource.org/licenses/lgpl-3.0.html
 * @version    $Id$
 */


/**
 * Palettes
 */
$GLOBALS['TL_DCA']['tl_content']['palettes']['e2photogallery'] = '{type_legend},type,headline;{source_legend},multiSRC,sortBy,useHomeDir;{image_legend},size,thumbSize;{template_legend},e2_style;{protected_legend:hide},protected;{expert_legend:hide},guests,align,space,cssID';


/**
 * Fields
 */
$GLOBALS['TL_DCA']['tl_content']['fields']['thumbSize'] = array
(
	'label'				=> &$GLOBALS['TL_LANG']['tl_content']['thumbSize'],
	'exclude'			=> true,
	'inputType'			=> 'text',
	'eval'				=> array('mandatory'=>true, 'multiple'=>true, 'size'=>2, 'maxlength'=>20, 'rgxp'=>'digits', 'tl_class'=>'w50'),
);

$GLOBALS['TL_DCA']['tl_content']['fields']['e2_style'] = array
(
	'label'				=> &$GLOBALS['TL_LANG']['tl_content']['e2_style'],
	'exclude'			=> true,
	'inputType'			=> 'select',
	'options'			=> array('photo', 'photo_black', 'photo_gray', 'photo_lightblue', 'photo_lightgray', 'photo_pink'),
	'reference'			=> &$GLOBALS['TL_LANG']['tl_content']['e2_style'],
	'eval'				=> array('includeBlankOption'=>true, 'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_content']['e2_style']['default'], 'tl_class'=>'clr'),
);

