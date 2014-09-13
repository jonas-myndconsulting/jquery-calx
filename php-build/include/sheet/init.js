sheet.prototype.init = function(){
    //console.log('sheet[#'+this.elementId+'] : Initializing the sheet');
    var cells = this.el.find('[data-cell],[data-formula],[data-format]'),
        sheet = this,
        $cell;

    this.parser = parserFactory(this);
    this.el.attr('data-calx-identifier', this.identifier);

    cells.each(function(){
        $cell = new cell(sheet, this);
        sheet.registerCell($cell);
    });

    sheet.attachEvent();

    if(this.config.autoCalculate){
        //console.log('sheet[#'+this.elementId+'] : autocalculating the sheet');
        this.calculate();
        this.renderComputedValue();
    }
};