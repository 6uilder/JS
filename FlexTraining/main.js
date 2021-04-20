let cont = document.getElementById('container');

function flexDirection_row() {
  cont.style.flexDirection = 'row';
  document.getElementById('flexDirection_row').style.backgroundColor = 'lime';
  document.getElementById('flexDirection_column').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_row_reverse').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_column_reverse').style.backgroundColor = 'darksalmon';
}
function flexDirection_column() {
  cont.style.flexDirection = 'column';
  document.getElementById('flexDirection_row').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_column').style.backgroundColor = 'lime';
  document.getElementById('flexDirection_row_reverse').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_column_reverse').style.backgroundColor = 'darksalmon';
}
function flexDirection_row_reverse() {
  cont.style.flexDirection = 'row-reverse';
  document.getElementById('flexDirection_row').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_column').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_row_reverse').style.backgroundColor = 'lime';
  document.getElementById('flexDirection_column_reverse').style.backgroundColor = 'darksalmon';
}
function flexDirection_column_reverse() {
  cont.style.flexDirection = 'column-reverse';
  document.getElementById('flexDirection_row').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_column').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_row_reverse').style.backgroundColor = 'darksalmon';
  document.getElementById('flexDirection_column_reverse').style.backgroundColor = 'lime';
}
function justifyContent_flex_start() {
  cont.style.justifyContent = 'flex-start';
  document.getElementById('justifyContent_flex_start').style.backgroundColor = 'lime';
  document.getElementById('justifyContent_flex_end').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_center').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_between').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_aroun').style.backgroundColor = 'darksalmon';
}
function justifyContent_flex_end() {
  cont.style.justifyContent = 'flex-end';
  document.getElementById('justifyContent_flex_start').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_flex_end').style.backgroundColor = 'lime';
  document.getElementById('justifyContent_center').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_between').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_aroun').style.backgroundColor = 'darksalmon';
}
function justifyContent_center() {
  cont.style.justifyContent = 'center';
  document.getElementById('justifyContent_flex_start').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_flex_end').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_center').style.backgroundColor = 'lime';
  document.getElementById('justifyContent_space_between').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_aroun').style.backgroundColor = 'darksalmon';
}
function justifyContent_space_between() {
  cont.style.justifyContent = 'space-between';
  document.getElementById('justifyContent_flex_start').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_flex_end').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_center').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_between').style.backgroundColor = 'lime';
  document.getElementById('justifyContent_space_aroun').style.backgroundColor = 'darksalmon';
}
function justifyContent_space_aroun() {
  cont.style.justifyContent = 'space-around';
  document.getElementById('justifyContent_flex_start').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_flex_end').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_center').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_between').style.backgroundColor = 'darksalmon';
  document.getElementById('justifyContent_space_aroun').style.backgroundColor = 'lime';
}
function alignItems_stretch() {
  cont.style.alignItems = 'stretch';
  document.getElementById('alignItems_stretch').style.backgroundColor = 'lime';
  document.getElementById('alignItems_flex_end').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_center').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_flex_start').style.backgroundColor = 'darksalmon';
}
function alignItems_flex_end() {
  cont.style.alignItems = 'flex-end';
  document.getElementById('alignItems_stretch').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_flex_end').style.backgroundColor = 'lime';
  document.getElementById('alignItems_center').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_flex_start').style.backgroundColor = 'darksalmon';
}
function alignItems_center() {
  cont.style.alignItems = 'center';
  document.getElementById('alignItems_stretch').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_flex_end').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_center').style.backgroundColor = 'lime';
  document.getElementById('alignItems_flex_start').style.backgroundColor = 'darksalmon';
}
function alignItems_flex_start() {
  cont.style.alignItems = 'flex-start';
  document.getElementById('alignItems_stretch').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_flex_end').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_center').style.backgroundColor = 'darksalmon';
  document.getElementById('alignItems_flex_start').style.backgroundColor = 'lime';
}


