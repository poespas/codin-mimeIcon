//Based on https://github.com/eagerterrier/MimeTypes-Link-Icons/tree/master/images

const fs = require('fs');

let types = [
	'3g2', '3gp',
	'ai', 'air', 'asf', 'avi',
	'bib',
	'cls', 'csv',
	'deb', 'djvu', 'dmg', 'doc', 'docx', 'dwf', 'dwg',
	'eps', 'epub', 'exe',		
	'f', 'f77', 'f90', 'flac', 'flv',
	'gif', 'gz',
	'ico', 'indd', 'iso',
	'jpg', 'jpeg',
	'key',
	'log',
	'm4a', 'm4v', 'midi', 'mkv', 'mov', 'mp3', 'mp4', 'mpeg', 'mpg', 'msi',
	'odp', 'ods', 'odt', 'oga', 'ogg', 'ogv',
	'pdf', 'png', 'pps', 'ppsx', 'ppt', 'pptx', 'psd', 'pub', 'py',
	'qt',
	'ra', 'ram', 'rar', 'rm', 'rpm', 'rtf', 'rv',
	'skp', 'spx', 'sql', 'sty',
	'tar', 'tex', 'tgz', 'tiff', 'ttf', 'txt',
	'vob',
	'wav', 'wmv',
	'xls', 'xlsx', 'xml', 'xpi',
	'zip'
];


/*
ext - contenttype (for example 'zip' )
size - 8,16,22,32,48,64,128,256 px squared
*/

function getIcon(ext, size = 128, fileExt = "png") {
	if (!types.includes(ext)) {
		throw "Mimetype " + ext + " is not supported at this time.";
	}
	
	if (fileExt != "png" && fileExt != "gif") {
		throw "Supported fileExt is png and gif";
	}
	
	const path = `${ext}-icon-${size}x${size}.${fileExt}`;
	
	if (!fs.existsSync(`./icons/${path}`)) {
		throw "File "+path+" not found.";
	}
	
	return path;
}



console.log(getIcon("png"));
console.log(getIcon("zip"));
console.log(getIcon("jpg"));