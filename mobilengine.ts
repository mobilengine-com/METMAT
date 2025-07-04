// noinspection JSUnusedGlobalSymbols

export {}

declare global {

    /** Boolean value */
    class bool {
        /** Converts the specified string representation of a logical value to its boolean equivalent, returns undefined if the conversion fails. */
        static Parse(st: string): boolean | undefined;
    }

    interface Boolean {
        /** Converts the value to its equivalent string representation. */
        ToString(): string;
    }

    /** Represents date coming from database.
     You need to explicitly designate dtdb to either dtl or dtu (using DeclareFoo) in order to use it.
     You need to explicitly convert dtl or dtu to dtdb before writing it to the database (using FooToDtdb).
     NOTE: these methods will not perform actual timezone conversion hence dtl.DtlToDtdb().DeclareAsDtu() will fail. */
    class dtdb {
    }

    interface dtdb {
        /** Declares the value as dtu. */
        DeclareAsDtu(): dtu;

        /** Declares the value as dtl. */
        DeclareAsDtl(): dtl;
    }

    /** Datetime format */
    class dtf {
        /** Create a Dtf from a string. */
        static Parse(rv: string): dtf;
    }

    /** Datetime (Company local timezone) */
    class dtl {
        /** Creates a new dtl object with the specified year, month, day, hour, minute, second, and millisecond. */
        static New(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number): dtl;

        /** Creates a new dtl object that is set to the current date and time on this computer, expressed as company local time. */
        static Now(): dtl;

        /** Converts the specified string representation of a date and time to its dtl equivalent using the specified format information. Returns undefined if the conversion fails. */
        static Parse(rvDtf: dtf, st: string): dtl | undefined;
    }

    interface dtl {
        /** Converts the specified dtl value to its dtdb equivalent. */
        DtlToDtdb(): dtdb;

        /** Converts the specified dtl value to its dtu equivalent. */
        DtlToDtu(): dtu;

        /** Returns a new dtl that adds the specified number of years to the value of this object. */
        DtlAddYears(cyear: number): dtl;

        /** Returns a new dtl that adds the specified number of months to the value of this object. */
        DtlAddMonths(cmonth: number): dtl;

        /** Returns a new dtl that adds the specified number of days to the value of this object. */
        DtlAddDays(cday: number): dtl;

        /** Returns a new dtl that adds the specified number of hours to the value of this object. */
        DtlAddHours(chour: number): dtl;

        /** Returns a new dtl that adds the specified number of minutes to the value of this object. */
        DtlAddMinutes(cmoh: number): dtl;

        /** Returns a new dtl that adds the specified number of seconds to the value of this object. */
        DtlAddSeconds(csecond: number): dtl;

        /** Returns a new dtl that adds the specified number of milliseconds to the value of this object. */
        DtlAddMilliseconds(cmillis: number): dtl;

        /** Returns the start of the day. */
        StartOfDay(): dtl;

        /** Returns the start of the month. */
        StartOfMonth(): dtl;

        /** Returns the start of the year. */
        StartOfYear(): dtl;

        /** Returns the day of the week: 0-6, with Sunday as 0 and Saturday as 6 */
        DayOfWeek(): number;

        /** Returns the week of the year defined by ISO 8601 */
        WeekOfYear(): number;

        /** Returns difference between dates as a timespan */
        Diff(dtlOther: dtl): timespan;

        /** Returns the date created by adding the timespan to this date */
        Add(timespan: timespan): dtl;

        /** Returns the date created by subtracting the timespan from this date */
        Subtract(timespan: timespan): dtl;

        /** Converts the value of the current dtl object to its equivalent string representation using the specified format. */
        Format(rvDtf: dtf): string;

        /** No docs */
        Year: number;
        /** No docs */
        Month: number;
        /** No docs */
        Day: number;
        /** No docs */
        Hour: number;
        /** No docs */
        Minute: number;
        /** No docs */
        Second: number;
        /** No docs */
        Millisecond: number;
    }

    /** Datetime (UTC) */
    class dtu {
        /** Creates a new dtu object with the specified year, month, day, hour, minute, second, and millisecond. */
        static New(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number): dtu;

        /** Creates a new dtu object that is set to the current date and time on this computer, expressed as the UTC time. */
        static Now(): dtu;

        /** Converts the specified string representation of a date and time to its dtu equivalent using the specified format information. Returns undefined if the conversion fails. */
        static Parse(rvDtf: dtf, st: string): dtu | undefined;
    }

    interface dtu {
        /** Converts the specified dtu value to its dtdb equivalent. */
        DtuToDtdb(): dtdb;

        /** Converts the specified dtu value to its dtl equivalent. */
        DtuToDtl(): dtl;

        /** Returns a new dtu that adds the specified number of years to the value of this object. */
        DtuAddYears(cyear: number): dtu;

        /** Returns a new dtu that adds the specified number of months to the value of this object. */
        DtuAddMonths(cmonth: number): dtu;

        /** Returns a new dtu that adds the specified number of days to the value of this object. */
        DtuAddDays(cday: number): dtu;

        /** Returns a new dtu that adds the specified number of hours to the value of this object. */
        DtuAddHours(chour: number): dtu;

        /** Returns a new dtu that adds the specified number of minutes to the value of this object. */
        DtuAddMinutes(cmoh: number): dtu;

        /** Returns a new dtu that adds the specified number of seconds to the value of this object. */
        DtuAddSeconds(csecond: number): dtu;

        /** Returns a new dtu that adds the specified number of milliseconds to the value of this object. */
        DtuAddMilliseconds(cmillis: number): dtu;

        /** Returns the start of the day. */
        StartOfDay(): dtu;

        /** Returns the start of the month. */
        StartOfMonth(): dtu;

        /** Returns the start of the year. */
        StartOfYear(): dtu;

        /** Returns the day of the week: 0-6, with Sunday as 0 and Saturday as 6 */
        DayOfWeek(): number;

        /** Returns the week of the year defined by ISO 8601 */
        WeekOfYear(): number;

        /** Returns difference between dates as a timespan */
        Diff(dtuOther: dtu): timespan;

        /** Returns the date created by adding the timespan to this date */
        Add(timespan: timespan): dtu;

        /** Returns the date created by subtracting the timespan from this date */
        Subtract(timespan: timespan): dtu;

        /** Converts the value of the current dtu object to its equivalent string representation using the specified format. */
        Format(rvDtf: dtf): string;

        /** No docs */
        Year: number;
        /** No docs */
        Month: number;
        /** No docs */
        Day: number;
        /** No docs */
        Hour: number;
        /** No docs */
        Minute: number;
        /** No docs */
        Second: number;
        /** No docs */
        Millisecond: number;
    }

    /** Event table. Event tables can be created using the 'using eventtab foo' syntax */
    interface eventtable {
        /** Returns the list of pending events from the eventtab matching the criteria specified in the rvmapFbe parameter. Each returned event is converted to a map. */
        Read(rvmapFbe: map): list;

        /** Creates a pending event with the specified values in the eventtab. Error occurs if the table already contains an event with the same values. Error occurs if the user column is not specified or null. */
        Create(rvmapInsert: map): void;

        /** Cancels a pending event with the specified values in the table. Error occurs if rvmapWhere does not match exactlz on event */
        Cancel(rvmapWhere: map): void;
    }

    /** Represents an opened Excel file. */
    class excel {
        /** Initializes a new empty excel document object. */
        static New(): excel;

        /** Open an Excel file from a fileref.

         Returns an excel object, representing the opened file.
         The same excel file may be opened multiple times.
         Throws an error if the file is not a valid XLSX file, XLS files are not supported.

         Avoid opening too many Excel files at once, to conserve memory.
         Use the `Close()` method to close a file after use.

         All remaning opened Excel files will be closed at the end of the script execution. */
        static FromFileref(fileref: fileref): excel;

        /** Converts an excel date (represented as a number) to a Dtdb.

         Sometimes the `GetValue()` method may return a number, even if the cell is formatted as a date.
         This should only happen for exotic date formats.

         In that case, you can use this method to convert the number returned by `GetValue()` to a `dtdb`. */
        static ExcelDateToDtdb(dateAsNumber: number): dtdb;
    }

    interface excel {
        /** Returns the value of the cell.

         The returned value may be one of the following types:
         - boolean
         - number
         - DtDb
         - string
         - null

         The first valid row/column number is 0.
         Formula cells return the last calculated value of the formula.
         Blank cells and error cells return null.
         Null is also returned if you address a cell outside the sheet's range.
         Negative row/column parameters throw an error.
         Referring to a non-existent sheet also throws an error. */
        GetValue(sheetName: string, row: number, column: number): any;

        /** Returns a list containing the names of the worksheets in the Excel file. */
        SheetNames(): list;

        /** Closes (frees memory used by) the excel document. */
        Close(): void;

        /** Returns the number of rows on a sheet.

         Referring to a non-existent sheet also throws an error. */
        RowCount(sheetName: string): number;

        /** Returns the number of columns on a sheet.

         Referring to a non-existent sheet also throws an error. */
        ColumnCount(sheetName: string): number;

        /** Adds a sheet to excel with given name and returns the name */
        AddSheet(sheetName: string): string;

        /** Sets the value of a cell on a given sheet.

         The value may be one of the following types:
         - boolean
         - number
         - dtdb, dtu or dtl
         - timespan
         - string
         - null

         The first valid row/column number is 0.
         Negative row/column parameters throw an error.
         Referring to a non-existent sheet also throws an error. */
        SetValue(sheetName: string, row: number, column: number, value: any): void;

        /** Sets the style and format of a cell on a given sheet
         Style map properties:
         - font: string, font name, default: `Calibri`. please use generally available fonts
         - fontColor: string enum, color name of one of the predefined colors, see documentation
         - fontHeight: float, font size in pt as seen in excel.can be non integer
         - bold: bool
         - italic: bool
         - strikethrough: bool
         - underlined: bool
         - format: Date or number or other format string, see documentation
         - alignment: string enum, one of these: General(default) / Left / Center / Right / Justify / Fill / Distributed
         - wrapText: bool
         - backgroundColor: string enum, color name of one of the predefined colors, see documentation

         The first valid row/column number is 0.
         Negative row/column parameters throw an error.
         Referring to a non-existent sheet also throws an error. */
        SetStyle(sheetName: string, row: number, column: number, mapStyle: map): void;

        /** Sets the column width on a given sheet for a column. Column size is in `0` character width of the default excel font.

         The first valid column number is 0.
         Negative column parameters throw an error.
         Referring to a non-existent sheet also throws an error. */
        SetColumnWidth(sheetName: string, column: number, cChar: number): void;

        /** Save the excel document to the media store.

         The parameter is the file name, can be null in typescript, then it will be `document.xlsx`.
         Returns the mediaId of the created file. */
        Store(filename: string): string;
    }

    /** File reference. */
    class fileref {
        /** Create a new fileref from a mediaId (guid as a string) and a priority (int) */
        static New(mediaId: string, priority: number): fileref;

        /** Parse the fileref from a string representation, 'guid|priority' */
        static Parse(fileref: string): fileref;

        /** Find files in the mediaStore by name */
        static FindByName(fileName: string, matchType: string): list;
    }

    interface fileref {
        /** Returns a boolean indicating whether the referenced file exists */
        Exists(): boolean;

        /** Returns the original filename of the file, if known. */
        Filename(): string;

        /** Returns the size of the file, or -1 if the file doesn't exist. */
        Size(): number;

        /** Returns the all-lowercase SHA-1 checksum for the file. May be null for older files (uploaded before checksums) */
        Checksum(): string;

        /** Format the fileref into its string representation, 'guid|priority' */
        ToString(): string;

        /** Get the mediaId from the fileref */
        MediaId(): string;

        /** Get the priority of the fileref */
        Priority(): number;

        /** Deletes the stored file behind fileref */
        Delete(fForced: boolean): void;
    }

    /** Double precision floating point value */
    class float {
        /** Returns positive infinity. */
        static PositiveInfinity(): number;

        /** Returns negative infinity. */
        static NegativeInfinity(): number;

        /** Returns a value that is not a number (NaN). */
        static NaN(): number;

        /** Converts the string representation of a number to its floating-point number equivalent. Returns undefined if the conversion fails. */
        static Parse(st: string): number | undefined;

        /** Converts the string representation of a number to its floating-point number equivalent, returns undefined if the conversion fails. */
        static ParseNuf(rvnuf: map, st: string): number | undefined;

        /** Returns a random value in the interval [0, 1) */
        static Random(): number;
    }

    /** Globally unique identifier */
    class guid {
        /** Generates a new Guid value. */
        static Generate(): guid;

        /** Converts the string representation of a GUID to the equivalent Guid value. Returns undefined if the conversion fails. */
        static Parse(st: string): guid | undefined;
    }

    interface guid {
        /** Returns a string representation of the value in the format of 32 digits: f8903fa1a9ed4ce5bf0f83b96413109e */
        ToStringN(): string;

        /** Returns a string representation of the value in the format of 32 digits separated by hyphens: f8903fa1-a9ed-4ce5-bf0f-83b96413109e */
        ToStringD(): string;

        /** Returns a string representation of the value in the format of 32 digits separated by hyphens, enclosed in brackets: {f8903fa1-a9ed-4ce5-bf0f-83b96413109e} */
        ToStringB(): string;
    }

    /** Represents an image in memory. */
    class image {
        /** Load an image from a file in the media store.

         JPEG and PNG images are supported, other image formats may or may not work. */
        static FromFileref(fileref: fileref): image;

        /** Load an icon in the solution as an image.

         Returns undefined if the solution doesn't contain an icon with the specified name.
         Icon names are case sensitive. */
        static FromIcon(iconName: string): image;
    }

    interface image {
        /** Save the image to the media store.

         The type parameter can be 'png' or 'jpg'.
         Returns the mediaId of the created file. */
        Store(type: 'png' | 'jpg'): string;

        /** Free the memory used for storing this image.

         The image won't be usable after closing. */
        Close(): void;

        /** Replaces the image with a part of it.

         The `topLeftX` and `topLeftY` coordinates specify the top-left of the cropped rectangle,
         and the `width` and `height` specify the size of the cropped rectangle.

         The function tries hard to crop a rectangle with the specified size.
         If the x/y coordinates are negative, they are increased to zero.
         If the x+width/y+height values are off the image, the x and y coordinates
         are decreased until this is not the case.
         If the width/height are larger than the image's size, they are decreased
         to match the image's width/height.

         The width and height values must be positive. */
        Crop(topLeftX: number, topLeftY: number, width: number, height: number): void;

        /** Draws a shape on the image.

         The `centerX` and `centerY` coordinates specify the center of the shape.

         The `size` specifies the radius (or whatever is analogous) for the shape;
         so the shape will take up about `size / 2` pixels around the center.

         The style parameter defines details about the shape to be drawn.
         It has three properties:

         The `color` property may be a string containing a hex CSS color, the default is black.

         The `shape` parameter specifies the kind of shape: `disk`, `square`, `triangle` or `rhombus`.
         The `shape` may have an optional `full_`, `open_` or `dashed_` prefix.
         The default is `full_disk`.

         The `lineWidth` property defines the thickness of the outline
         when the shape is prefixed with `open_` or `dashed_`. */
        DrawShape(centerX: number, centerY: number, size: number, style: map): void;

        /** Draws a polygon on the image.

         The `points` parameter must be a list containing the points for the polygon.
         A point must be a map/object, with `x` and `y` properties.
         The list must contain at least 3 points.

         The `style` parameter contains a map which specifies how to draw the polygon.
         It may have these optional properties:

         `shape`
         One of `shape`, `dashedShape` or `cloud`.
         `shape` is the default.

         `lineWidth`:
         The width of the line to draw.
         The default is 1.

         `color`:
         The color must be a CSS hex color, like `#FFF` or ``AABBCC``.
         Alpha components are not supported.
         The default is black.

         `radius`:
         When `shape` is cloud, determines the radius of the arcs that the cloud is composed of.
         The default is 10.

         The origin of the coordinate system is at the top-left corner.
         All units are pixels. */
        DrawPolygon(points: list, style: map): void;

        /** Resizes this image.

         The `width` and `height` parameters specify the new size of this image. */
        Resize(width: number, height: number): void;

        /** Draws an image on this image.

         The `image` parameter specifies an image to draw on this image.

         The `x` and `y` coordinates specify the top-left of the area where the image will be drawn.
         It's valid to place the image outside the bounds of this image. */
        DrawImage(image: image, topLeftX: number, topLeftY: number): void;

        /** Creates a copy of this image.

         Cropping and drawing changes the image.
         This is useful if you want to make multiple modifications from the same source image,
         like cropping the same rendered PDF page.
         The cloned image needs to be closed independently from the source image. */
        Clone(): image;

        /** Rotates this image.

         The `angle` parameter specifies the angle of the rotation, in degrees.
         Positive rotation is interpreted as clockwise, negative is anti-clockwise. 
         The angle must be a multiple of 90. */
        Rotate(angle: number): void;

        /** The width of the image, in pixels.
         Contains 0 if the image is closed. */
        Width: number;
        /** The height of the image, in pixels.
         Contains 0 if the image is closed. */
        Height: number;
    }

    /** 32-bit signed integer */
    class int {
        /** Converts the string representation of a number to integer equivalent, returns undefined if the conversion fails. */
        static Parse(st: string): number | undefined;

        /** Converts the string representation of a number to integer equivalent, returns undefined if the conversion fails. */
        static ParseNuf(rvnuf: map, st: string): number | undefined;
    }

    /** Represents a list of values. Values can be of any type (rv). */
    class list extends Array {
        /** Initializes a new list object. */
        static New(): list;
    }

    /** Represents a list of labelled values. Values are labelled with strings. Values can be of any type (rv). */
    class map extends Object {
        /** Initializes a new map object. */
        static New(): map;
    }

    interface Object {
        /** Initializes a new map object based this map. */
        Clone(): map;

        /** Determines whether the map contains the specified key. */
        ContainsKey(stKey: string): boolean;

        /** Gets the number of key/value pairs contained in the map. */
        Count(): number;

        /** Removes all keys and values from the map. */
        Clear(): void;

        /** Returns the value associatied with the specified key. An error occures if the key not exists in the map. The [] operator can also be used for this purpose. */
        GetAt(stKey: string): any;

        /** Associatied the specified key with the given value in the map. The [] operator can also be used for this purpose. */
        SetAt(stKey: string, rvItem: any): void;

        /** Returns the list of keys from the map. */
        Keys(): list;

        /** Returns the contents of the map and the other map in a new map. The repeated keys will use the second map's value. */
        Concat(other: map): map;
    }

    /** Pdf file with info. */
    class pdf {
        /** Pdf from fileref */
        static FromFileref(fileref: fileref): pdf;

        /** Pdf from reportviewId */
        static FromReportviewId(reportviewId: string): pdf;

        /** Merges multiple pdf files into one report or file */
        static Merge(rvPdfs: list, outputPdfName: string, outputType: string): string;

        /** Measure the area needed to draw the specified text.

         The `text` parameter specifies the size of the text to be measured. Lines are broken at spaces, and
         newline characters are supported, just like with the `AddFreeTextAnnotation` method.

         The `maxWidth` parameter specifies the maximum width of the text area, specified in points. Long lines
         are broken up at space characters to try and not exceed `maxWidth`. If the text contains long
         unbreakable words the actual measured width of the text will exceed `maxWidth`.

         The `style` parameter is a map that specifies font parameters. It supports a subset of
         `AddFreeTextAnnotation`'s properties:
         - `fontFamily` (default: Helvetica): The name of the font to use.
         - `fontSize` (default: 12): The em-size of the font in points.
         - `bold`, `italic`, `underline` (default: false): Flags specifying different font styles.

         The method returns a map with a `width` and a `height` key. These values specify the minimum area needed
         to render the text on the PDF. */
        static MeasureText(text: string, maxWidth: number, style: map): map;
    }

    interface pdf {
        /** Returns a boolean indicating whether the pdf file is valid */
        IsValid(): boolean;

        /** Returns the number for pages in the pdf */
        PageCount(): number;

        /** Returns the size of each page in the pdf */
        PageSizes(): list;

        /** Renders a page of the PDF to an image.

         The scale parameter specifies the resoultion of the image,
         the size of the image will be `scale * size` of the page,
         where the size is the width or height in `pt` units. */
        Render(pageIndex: number, scale: number): image;

        /** Adds an annotation with the specified shape.

         The `centerX` and `centerY` coordinates specify the center of the shape.

         The `size` specifies the radius (or whatever is analogous) for the shape;
         so the shape will take up about `size / 2` pixels around the center.

         The style parameter defines details about the shape to be drawn.
         It has three properties:

         The `color` property may be a string containing a hex CSS color, the default is black.

         The `shape` parameter specifies the kind of shape: `disk`, `square`, `triangle` or `rhombus`.
         The `shape` may have an optional `full_`, `open_` or `dashed_` prefix.
         The default is `full_disk`.

         The `lineWidth` property defines the thickness of the outline
         when the shape is prefixed with `open_` or `dashed_`.

         The origin of the coordinate system is at the top-left corner.
         All dimensions use `pt` units. */
        AddShapeAnnotation(pageIndex: number, centerX: number, centerY: number, size: number, style: map): void;

        /** Adds a polygon annotation.

         The `points` parameter must be a list containing the points for the polygon.
         A point must be a map/object, with `x` and `y` properties.
         The list must contain at least 3 points.

         The `style` parameter contains a map which specifies how to draw the polygon.
         It may have these optional properties:

         `shape`
         One of `shape`, `dashedShape` or `cloud`.
         `shape` is the default.

         `lineWidth`:
         The width of the line to draw.
         The default is 1.

         `color`:
         The color must be a CSS hex color, like `#FFF` or ``AABBCC``.
         Alpha components are not supported.
         The default is black.

         `radius`:
         When `shape` is cloud, determines the radius of the arcs that the cloud is composed of.
         The default is 10.

         The origin of the coordinate system is at the top-left corner.
         All dimensions use `pt` units. */
        AddPolygonAnnotation(pageIndex: number, points: list, style: map): void;

        /** Closes the document, frees the memory used. */
        Close(): void;

        /** Save the PDF to the media store.

         Returns the mediaId of the created file.
         The `filename` parameter specifies the filename used for the media store entry.
         'Document.pdf' is used if it's `null`. */
        Store(filename: string): string;

        /** Transform points from the annotator's coordinate system to a PDF page's coordinate system.

         The point has to be a map/object with `x` and `y` properties.
         The coordinates of the input point
         1. apply to the rotated page (if the page has any rotation)
         2. are in percentages of the width/height of the page
         3. have an origin on the top-left of the page's cropBox

         The returned coordinates:
         1. apply to the non-rotated page
         2. are in pt units
         3. have an origin at the top-left of the page's mediaBox. */
        AnnotatorToPdfCoordinates(pageIndex: number, points: list): list;

        /** Add a text annotation to the page.

         The `pageIndex` parameter select the page to modify.

         The `text` parameter sets the text that should be written on the PDF. Newlines are accepted, and create
         a new line. Line breaks only occur at space characters; long words may overflow if the width is too
         small.

         The `position` parameter sets the bounding box of the annotation, measured from the top-left of the
         rotated cropbox. All units are points. The size of the bounding box includes the border. You can use the
         `MeasureText` method to determine the proper size for the cropbox.

         The `style` parameter is a map containing details about how to draw the text. All properties are
         optional, the defaults are listed below next to the property. The following properties can be used:

         - `backgroundColor` (default: white): A hex color that specifies the backgound color to use for the bounding box.
         - `borderColor` (default: black): A hex color that specifies the color of the border.
         - `borderWidth` (default: 0): The width of the border in points. May be zero.
         - `padding` (default: no padding): A map setting the padding inside the border of the bounding box. It
         can have optional `top`, `bottom`, `left` and `right` properties, which set the padding on the
         corresponding side in points.
         - `fontFamily` (default: Helvetica): The name of the font to use.
         - `fontSize` (default: 12): The em-size of the font in points.
         - `fontColor` (default: black): The color of the font.
         - `bold`, `italic`, `underline` (default: false): Flags specifying different font styles.
         - `hPosition` (default: center): Specifies horizontal alignment. May be `left`, `center` or `right`.
         - `vPosition` (default: center): Specifies vertical alignment. May be `top`, `center` or `bottom`. */
        AddFreeTextAnnotation(pageIndex: number, text: string, position: map, style: map): void;

        /** Add an image as an annotation to the page.

         The `pageIndex` parameter select the page to modify.

         The `image` parameter specifies the image object to use.

         The `position` parameter sets the bounding box of the image, measured from the top-left of the
         rotated cropbox. All units are points. The image will be stretched to fit this area. */
        AddImageAnnotation(pageIndex: number, image: image, position: map): void;
    }

    /** Represents data for QR code image generation. */
    class qrcode {
        /** Initializes a new qrcode object. */
        static New(): qrcode;
    }

    interface qrcode {
        /** Generates a QR code and returns the image. */
        Generate(): image;

        /** Sets the data contained in the QR code.

         If the text is null or too long, Generate() will throw an error. */
        Text: string;
    }

    interface rfsref {
        /** No docs */
        New(): rfsrun;
    }

    interface rfsrun {
        /** No docs */
        Run(): void;

        /** No docs */
        SetParams(rvParams: map): void;

        /** No docs */
        SetPriority(priority: string): void;
    }

    /** Database table. Database tables can be created using the 'using reftab foo' syntax */
    interface table {
        /** Returns the list of rows from the table matching the criteria specified in the rvmapFbe parameter. Each returned row is converted to a map. */
        Read(rvmapFbe: map): list;

        /** Returns the list of rows from the table matching the criteria specified in the rvmapFbe parameter, mapped to given field list in second parameter. Each returned row is converted to a map. */
        ReadFields(rvmapFbe: map, rvrgFields: list): list;

        /** Updates the row specified by the rvmapWhere parameter with the values set by the rvmapSet parameter. Error occurs if rvmapWhere matches multiple rows. */
        Update(rvmapWhere: map, rvmapSet: map): void;

        /** Updates the rows specified by the rvmapWhere parameter with the values set by the rvmapSet parameter. */
        UpdateMany(rvmapWhere: map, rvmapSet: map): void;

        /** Inserts the row specified by the rvmapWhere parameter to the table.
         If the row already presents, updates it with rvmapSet.
         In the later case rvmapWhere should match precisely one row in the table. */
        InsertOrUpdate(rvmapWhere: map, rvmapSet: map): void;

        /** Inserts the specified row the the table. Error occurs if the table already contains the row. */
        Insert(rvmapInsert: map): void;

        /** Deletes the specified row from the table. Error occurs if rvmapWhere matches multiple rows. */
        Delete(rvmapWhere: map): void;

        /** Deletes the specified row(s) from the table. */
        DeleteMany(rvmapWhere: map): void;

        /** Locks the specified row(s) until the end of the RFS run. Throws an error if the lock cannot be acquired and returns the locked rows. */
        Lock(rvmapWhere: map): list;
        
        /** Locks the specified row(s) in shared mode until the end of the RFS run. Throws an error if the lock cannot be acquired and returns the locked rows. */
        LockShared(rvmapWhere: map): list;
    }

    /** Terminates the evaluation with the specified error message. Will revert database transaction, mark processing failed and move message to deadletter queue. */
    function ThrowError(stMsg: string): void;

    /** Adds failed assert and message log message if cond is false. */
    function Assert(cond: boolean, stMsg: string): void;

    /** Suspends the execution for a given time. */
    function Sleep(milliseconds: number): void;

    /** Returns the type of its parameter as a string. */
    function TypeOf(rv: any): string;

    /** Logs the parameter, same as the trace statement. */
    function Log(rv: any): void;

    /** Sends push notification */
    function SendNotification(rvUsers: any, rvNotification: map): void;

    /** Sends trigger sync notification */
    function SendTriggerSync(rvUsers: any): void;

    /** Returns the string representation of a value (as Log() would print it) */
    function ToString(rv: any): string;

    /** Smtp interface. Can send emails */
    class smtp {
        /** Sends email with parameters in the map */
        static SendEmail(rvmapFbe: map): void;
    }

    interface String {
        /** Gets the number of characters in the current object. */
        Length(): number;

        /** Gets the character at the given index. The [] operator can also be used for this purpose. */
        GetAt(index: number): string;

        /** Retrieves a substring from this instance. The substring starts at a specified character position and has a specified length. */
        SubString(indexFirst: number, length: number): string;

        /** Reports the zero-based index of the first occurrence of the specified string in this string. */
        IndexOf(st: string): number;

        /** Reports the zero-based index of the last occurrence of the specified string in this string. */
        LastIndexOf(st: string): number;

        /** Returns a copy of this string converted to lowercase. */
        ToLower(): string;

        /** Returns a copy of this string converted to uppercase. */
        ToUpper(): string;

        /** Converts the numeric value to its equivalent string representation. */
        ToString(): string;

        /** Replaces all occurrences of the first parameter with the second. */
        Replace(stOld: string, stNew: string): string;

        /** Splits the string with given separator. Empties are removed. */
        Split(stSep: string): list;

        /** Splits the string with given separators in a list with empty ommiting option. */
        SplitOnMany(rgRtlistSep: list, fRemoveEmpties: boolean): list;

        /** Joins a list of strings given in parameter with this separator string. */
        Join(rgRtlist: list): string;

        /** Converts to urlencoded text. */
        UrlEncode(): string;

        /** Trims the given characters on both ends. */
        Trim(stChars: string): string;

        /** Trims the given characters on start. */
        TrimStart(stChars: string): string;

        /** Trims the given characters on end. */
        TrimEnd(stChars: string): string;

        /** Applies unicode normalization of given kind. */
        Normalize(stKind: string): string;

        /** Calculates the SHA-1 hash of the UTF-8 encoded representation of this string. Does not perform normalization before encoding the string. The result is 40 lowercase hex digits as a string, e.g. 'a2743f812...c3' */
        Sha1(): string;

        /** Removes accents from the string. */
        RemoveAccents(): string;
    }

    /** Distance between two dtl's or dtu's.
     You can create timespan by subtracting dates. Eg: dtlTo - dtlFrom
     NOTE: You may not subtract dtl from dtu and vice versa. */
    class timespan {
        /** Initializes a new TimeSpan to a specified number of days, hours, minutes, seconds, and milliseconds. */
        static New(days: number, hours: number, minutes: number, seconds: number, milliseconds: number): timespan;
    }

    interface timespan {
        /** Subtracts the provided timespan from this timespan. */
        Subtract(timespan: timespan): timespan;

        /** Adds the provided timespan from this timespan. */
        Add(timespan: timespan): timespan;

        /** No docs */
        Days: number;
        /** No docs */
        Hours: number;
        /** No docs */
        Minutes: number;
        /** No docs */
        Seconds: number;
        /** No docs */
        Milliseconds: number;
        /** No docs */
        TotalDays: number;
        /** No docs */
        TotalHours: number;
        /** No docs */
        TotalMinutes: number;
        /** No docs */
        TotalSeconds: number;
        /** No docs */
        TotalMilliseconds: number;
    }

    /** Tracking table. Included automatically under db. */
    interface __tracking_type {
        /** Returns the list of tracking rows matching the criteria specified in the rvmapFbe parameter. Each returned row is converted to a map. */
        Read(rvmapFbe: map): list;

        /** Returns the distance of tracking positions in meters. */
        Geodistance(rvlist: list): number;
    }

    interface Number {
        /**
         * Returns a value indicating whether the specified number evaluates to a value that is not a number (NaN).
         *
         * @deprecated Use the `isNaN()` global function. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN.
         */
        IsNaN(): boolean;

        /**
         * Returns a value indicating whether the specified number evaluates to negative or positive infinity.
         *
         * @deprecated You probably want the `isFinite()` global function. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite.
         */
        IsInfinity(): boolean;

        /**
         * Returns a value indicating whether the specified number evaluates to negative infinity.
         *
         * @deprecated You probably want the `isFinite()` global function. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite.
         */
        IsNegativeInfinity(): boolean;

        /**
         * Returns a value indicating whether the specified number evaluates to positive infinity.
         *
         * @deprecated You probably want the `isFinite()` global function. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite.
         */
        IsPositiveInfinity(): boolean;

        /**
         * Returns the largest integer less than or equal to the specified decimal number.
         * Returns -2147483648 if the number is NaN or Inf/-Inf.
         *
         * @deprecated Use `Math.floor()`.
         */
        Floor(): number;

        /**
         * Returns the largest integer less than or equal to the specified decimal number.
         * Returns -2147483648 if the number is NaN or Inf/-Inf.
         *
         * @deprecated Use `Math.trunc()`.
         */
        Truncate(): number;

        /** Rounds the value to the nearest integral value. */
        Round(): number;

        /**
         * Returns the smallest integral value that is greater than or equal to the floating-point number.
         * Returns -2147483648 if the number is NaN or Inf/-Inf.
         *
         * @deprecated Use `Math.ceil()`.
         */
        Ceiling(): number;

        /**
         * Converts the numeric value to its equivalent string representation.
         *
         * @deprecated Use the lowercase `toString()`.
         */
        ToString(): string;

        /** Converts the numeric value to its equivalent string representation. */
        ToStringNuf(rvNuf: map): string;

        /**
         * Converts the integer value to its equivalent floating point representation.
         *
         * @deprecated This is a no-op, just use the number.
         */
        ToFloat(): number;
    }

    interface CompanyMessages {
        successfulExport: MultiLangMessage | string
        noInputDataNoExport: MultiLangMessage | string
        successfulActivationPage: MultiLangMessage | string
        activationEmailSubject: MultiLangMessage | string
        activationEmailBody: MultiLangMessage | string
        successfulActivationEmailSubject: MultiLangMessage | string
        successfulActivationEmailBody: MultiLangMessage | string
        passwordRenewalEmailSubject: MultiLangMessage | string
        passwordRenewalEmailBody: MultiLangMessage | string
        praEmailSubject: MultiLangMessage | string
        praEmailBody: MultiLangMessage | string
        passwordTokenSms: MultiLangMessage | string
        downloadSms: MultiLangMessage | string
    }

    interface map {
        [x: string]: any
    }

    interface __db_type {
        tracking: __tracking_type
    }

    interface __location_type {
        latitude: number
        longitude: number
        altitude: number
        accuracy: number
        dtuAcquired: dtu
    }

    interface __form_base_type {
        readonly info: {
            readonly formn: string;
            readonly platform: string;
            readonly resultId: number;
            readonly dtuSubmit: dtu;
            readonly dtlSubmit: dtl;
            readonly user: __user_type;
            readonly location: __location_type;
            readonly autoSubmit: boolean;
        };

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly formn: string;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly platform: string;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly resultId: number;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly dtuSubmit: dtu;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly dtlSubmit: dtl;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly user: __user_type;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly location: __location_type;
    }

    interface __form_base_type {
        readonly info: {
            readonly formn: string;
            readonly platform: string;
            readonly resultId: number;
            readonly dtuSubmit: dtu;
            readonly dtlSubmit: dtl;
            readonly user: __user_type;
            readonly location: __location_type;
            readonly autoSubmit: boolean;
        };

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly formn: string;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly platform: string;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly resultId: number;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly dtuSubmit: dtu;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly dtlSubmit: dtl;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly user: __user_type;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly location: __location_type;
    }

    class __form_type extends map implements __form_base_type {
        readonly info: __form_base_type["info"];

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly formn: string;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly platform: string;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly resultId: number;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly dtuSubmit: dtu;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly dtlSubmit: dtl;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly user: __user_type;

        /**
         * @deprecated This is only available for android form results. Use the field on form.info instead, that works across all platforms.
         */
        readonly location: __location_type;
    }

    const form: __form_type;

    const params: any | TaskResult

    const dacs: any;

    type __DacsOutArray<T> = Array<T> & {
        AddNew(): T
        Add(p: T): void
    }

    type __DacsOutContentOnlyArray<T> = Array<T> & {
        Add(p: T): void
    }

    interface __report_input_type {
        readonly Name: string;
        readonly ReportviewId: string;
        readonly AttachmentName: string;
        readonly DtuT0: dtu;
        readonly DtuArchive: dtu;
        readonly ResultIdList: number[] | null;
        readonly Params: any;
    }

    const report: __report_input_type;

    /**
     * Information about the backoffice and the solution running this RFS.
     * Not defined on clients.
     */
    const systemInfo: {
        /**
         * The mobilengine version running the script.
         * It will contain a version number and the git revision, such as `55.0.54.1c74a78`
         */
        systemVersion: string;

        package: {
            readonly name: string | null;
            readonly displayName: string | null;
            readonly version: string | null;
        }

        /**
         * A readonly list of the integraion endpoints defined in the company.
         */
        ieps: Array<{
            readonly name: string;
            readonly type: IepType;
            readonly key: string;
            
            /**
             * The out URL for outbound ieps, and the WDX url (`https://s56.outdoor.mobilengine.com/Services/Wdx/Wdx.svc`) for inbound/rdtbin ieps.
             */
            readonly url: string;
            
            /**
             * The dacs names that are handled by this iep.
             * Empty for rdtbin ieps. 
             */
            readonly dacsNames: string[];
        }>

        /**
         * The URL of the current backoffice instance.
         * 
         * The same as the PublishUrl deployment config setting, contains an URL like `https://s56.outdoor.mobilengine.com/`.
         */
        url: string;
    };

    const programInfo: {
        /**
         * The engine that the current RFS is using.
         */
        readonly engine: "rfs" | "js";

        /**
         * The name of the currently running RFS.
         */
        readonly name: string;

        /**
         * The name of the form/dacs/report that triggered this RFS.
         */
        readonly trigger: string;

        /**
         * The type of solution item/event that triggered this RFS.
         */
        readonly triggerType: "Form" | "Dacs" | "Endsync" | "Saf" | "Schedule" | "Report" | "FailedReport" | "None";

        /**
         * The platform that's running the current script.
         */
        readonly platform: "server" | "ios" | "android";
    }

    /** 
     * Info about the current company.
     * 
     * Available on clients and the server.
     */
    const company: {
        readonly id: number
        readonly name: string
    };

    interface __user_type {
        readonly id: number
        readonly companyId: number
        readonly name: string
    }

    const endsync: {
        readonly event: map
        readonly user: __user_type
    };

    interface __report_start_type {
        Params: any
        T0: dtu
        AllowParallel: boolean | null

        /**
         * Filters for reftabs referenced in the report.
         *
         * Only rows matching these filters will be included in the report's input database.
         */
        filters: any

        SetPriority(priority: TaskPriority): void

        Run(): void
    }

    interface __report_ref {
        New(): __report_start_type
    }

    interface __report_ref_filtered<T> {
        New(): T
    }

    interface __message_factory {
        New(): __message;
    }

    interface __message extends map {
        Send(): void;
    }

    interface __formref_type {
        /**
         * The webform URL for this form.
         * 
         * `undefined` for non-web forms.
         */
        webformUrl: string | undefined;

        /**
         * Only available for android forms, `undefined` for other form types.
         */
        Pop(usern: string, params: map): void;
    }

    /**
     * Control tracking from client-side RFS.
     * 
     * Only available on android, `undefined` on other platforms.
     */
    const tracking: {
        IsOn(): boolean | null;
        TurnOn(): void;
        TurnOff(): void;
        TurnToDefault(): void;
    };

    const runtime = '<<runtime>>';

    const string = '<<string>>';

    function GetShortStack(jsStack: string): Array<{
        readonly file: string;
        readonly line: number;
        readonly column: number;
    }>;

    type HttpMethod = "GET" | "POST" | "PUT" | "HEAD" | "DELETE" | "PATCH" | "OPTIONS" | "CONNECT" | "TRACE";

    type HttpHeaders = { [key: string]: string | null | undefined };

    interface HttpError {
        /**
         * Contains the error message.
         *
         * Only use this for debugging, the exact contents may change at a later time.
         */
        readonly error: string;

        /**
         * Set to true if the request has failed with a timeout.
         */
        readonly isTimeout: boolean;
    }

    interface HttpTextResponse {
        /**
         * The HTTP status code of the response
         */
        readonly status: number;

        /**
         * The response headers.
         *
         * All header names are lowercased.
         * If a header occurs more than once, the values are concatenated with commas in an undefined order.
         * If an error occurs, the headers are empty.
         */
        readonly headers: HttpHeaders;

        /**
         * The response body as a string.
         *
         * Contains null if the response had no body
         */
        readonly text: string | null;
    }

    class HttpRequest {
        /**
         * The HTTP method.
         *
         * GET by default.
         */
        method: HttpMethod;

        /**
         * The HTTP headers to send with the request.
         *
         * No extra headers are sent by default.
         */
        headers: HttpHeaders;

        /** The request body. */
        body: string;

        /** The URL to send the request to. */
        url: string;

        /**
         * The timeout for the HTTP request in milliseconds.
         *
         * Only positive values are accepted.
         * The request won't be aborted if the RFS timeout expires before the response is received.
         */
        msTimeout: number;

        /**
         * Send the request and reads the response as a string.
         *
         * The request is sent synchronously, so the script execution is stopped until the response is received.
         */
        getTextResponse: () => HttpTextResponse | HttpError;
    }

    /**
     * Represents a file that can be downloaded with a public download link.
     */
    interface DownloadItem {
        /**
         * The file that this download contains. May contain a reportviewId too.
         */
        fileref?: string | fileref

        /**
         * The filename to use when downloading. If unspecified, the file's original name or the report's attachmentName will be used.
         */
        name?: string
    }

    /**
     * Create a link that allows the files to be downloaded without logging in.
     *
     * @param downloads The files to download.
     * @param validitySeconds The validity of the download in seconds.
     * @param maxDownloads How many times can the link be used to download all the files. Counts the number of bytes
     *  started to download, and the download is prohibited if the maximum is exceeded.
     * @param zipName The archive name, for multi-file downloads. Ignored for single-file downloads.
     * @returns The download URL as a string.
     */
    function CreateDownloadLink(downloads: DownloadItem[], validitySeconds: number | 'forever', maxDownloads: number | 'unlimited', zipName?: string): string;

    /** One of the supported languages. */
    type Language = "en" | "hu" | "pl" | "de" | "tr" | "nl" | "cs" | "ro" | "sk"

    /** A TZ identifier from the timezone database. */
    type TimeZone = string

    class Company {
        /** The company ID. */
        readonly id: number

        /**
         * The company name.
         *
         * Setting it to an invalid value will throw an exception. */
        name: string

        /**
         * The company TZ identifier.
         *
         * It's only allowed to change the time zone of a new company. */
        timeZone: TimeZone

        /**
         * The default language for the company messages.
         *
         * Setting it to an invalid value will throw an exception. */
        language: Language
        
        /** The dashboard IDs in the company's BI configuration. */
        readonly dashboardIds: string[]

        /** The company in which the current script is running in. */
        static readonly current: Company

        /**
         * Read all non-deleted and non-suspended companies.
         *
         * Also includes the current company. */
        static readActive(): Company[]

        /**
         * Save the changes made to the company.
         *
         * Creates the company if it doesn't exist yet, and updates it if it already exists. */
        save(): void

        /**
         * Read the company settings.
         *
         * Reading the settings for a company that hasn't been saved yet will throw an exception. */
        readSettings(): CompanySettings

        readMessages(): CompanyMessages

        /**
         * Read the client settings in the company.
         *
         * Reading the settings for a company that hasn't been saved yet will throw an exception. */
        readClientSettings(): ClientSettings

        /**
         * Read the integration endpoints in the company.
         *
         * Reading the ieps for a company that hasn't been saved yet will throw an exception. */
        readIeps(): Iep[]

        /**
         * Start creating a new integration endpoint in the company.
         *
         * Calling this on a company that hasn't been saved yet will throw an exception.
         *
         * @returns The new iep. Call `save()` on the iep to create it.
         */
        createIep(kind: "Wdi"): InIep

        /**
         * Start creating a new integration endpoint in the company.
         *
         * Calling this on a company that hasn't been saved yet will throw an exception.
         *
         * @returns The new iep. Call `save()` on the iep to create it.
         */
        createIep(kind: "Wdo"): OutIep

        /**
         * Start creating a new integration endpoint in the company.
         *
         * Calling this on a company that hasn't been saved yet will throw an exception.
         *
         * @returns The new iep. Call `save()` on the iep to create it.
         */
        createIep(kind: "Rdtbin"): BinaryIep

        /**
         * Read all non-deleted users in the company.
         *
         * Calling this on a company that hasn't been saved yet will throw an exception.
         */
        readUsers(): User[]

        /**
         * Start creating a user in the company.
         *
         * Calling this on a company that hasn't been saved yet will throw an exception.
         *
         * @returns: A new user. Call `save()` on the user to create it.
         */
        createUser(): User

        /**
         * Get the currently applied package in the company.
         *
         * @returns The currently applied package or null if there is none.
         */
        readCurrentPackage(): Package | null

        /**
         * Apply a package in a company.
         *
         * The company must not be the current company.
         * You don't need to save the company after calling this.
         */
        applyPackage(pkg: Package): void

        /**
         * Upload refdata in a company.
         *
         * @param mediaId The mediaId of the file containing the refdata. Xlsx and Sqlite formats are supported.
         */
        uploadRefdata(mediaId: string): void

        /**
         * Creates a new RFS run in a company.
         *
         * @param rfsn The name of the RFS run, it must be a scheduled RFS.
         * @returns The new RFS run, start it with the `run` method.
         */
        newRfsRun(rfsn: string): RfsRun
    }

    type ExportFormat = 'CSV' | 'HTML' | 'XLSX'

    interface CompanySettings {
        allowParallelRfsRuns: boolean
        apnCertificateIssuer: string | null
        apnCertificateSerial: string | null
        deleteOldFilesAfterDays: number | null
        deleteOldLogsAfterDays: number | null
        deleteOldPhotosAfterDays: number | null
        deleteOldReportsAfterDays: number | null
        deleteOldResultsAfterDays: number | null
        deleteOldTrackingAfterDays: number | null
        displayHistoryOnWebforms: boolean
        enableMapDisplay: boolean
        enableMfaForNewUsers: boolean
        enablePushNotification: boolean
        exportFormat: ExportFormat
        includeTrackingDataWithExport: boolean
        mfaAppName: string
        mfaAppUrlAndroid: string
        mfaAppUrlIos: string
        newMobileTokenExpirationDays: number
        passwordResetRequiresApproval: boolean
        rememberDeviceValiditySeconds: number | null
        requiredAndroidClientPackageName: string
        rfsLockWaitTimeoutSeconds: number
        rfsTimeoutSeconds: number
        sendApprovalEmail: boolean
        sendApprovalEmailTo: string
        webformBodyBackgroundCss: string
        webformHeaderBackgroundCss: string
        webformHeaderTextColorCss: string
        showWebformsHeader: boolean

        /**
         * Save the changes made to the settings.
         *
         * If invalid settings are found, an error is thrown. */
        save(): void
    }

    class MultiLangMessage {
        readonly defaultLanguage: Language

        readonly en: string | null
        readonly hu: string | null
        readonly pl: string | null
        readonly de: string | null
        readonly tr: string | null
        readonly nl: string | null
        readonly cs: string | null
        readonly ro: string | null
        readonly sk: string | null

        /**
         * Create a new MultiLangMessage with the specified default language.
         *
         * @nosideeffects
         */
        withDefault(language: Language): MultiLangMessage

        /**
         * Create a new MultiLangMessage with a new message for the specified language.
         *
         * @nosideeffects
         */
        with(language: Language, messageds: string | null): MultiLangMessage
    }

    interface CompanyMessages {

        /** Save the changes made to the messages. */
        save(): void
    }

    interface ClientSettings {
        formLocationUpdateIntervalSeconds: number
        formLocationValiditySeconds: number
        formLocationDesiredAccuracyMeters: number
        secureTimestampNeeded: boolean
        autoSyncIntervalSeconds: number | "never"
        oldResultLifeTimeSeconds: number
        syncRetryTimeoutSeconds: number
        syncRetryFrequencySeconds: number
        syncLevel2RetryTimeoutMinutes: number
        syncLevel2RetryFrequencyMinutes: number
        requireOnlineLoginSeconds: number | "never" | "always"
        rfsTimeoutSeconds: number
        waitingForRfsPollingInterval: number | "never"
        lockWhenIdleSeconds: number | "never" | "always"
        requirePasswordAfterLogout: "required" | "notRequired" | "noLogout"
        wipeDataAfterLogout: "optionalWipe" | "wipeIfNoUnsent" | "noWipe" | "always"
        downloadCacheMaxAgeSeconds: number
        downloadCacheMaxSizeMegabytes: number
        onlineQueryCacheMaxAgeSeconds: number
        onlineQueryCacheMaxSizeMegabytes: number
        trackingEnabled: boolean
        trackingIntervalSeconds: number
        trackingDesiredAccuracyMeters: number
        trackingMinimumDistanceMeters: number
        trackingUploadIntervalSeconds: number
        trackingNotificationTitle: string
        trackingNotificationMessage: string
        filerefDownloadAbovePriority: number
        filerefDownloadInBackgroundAbovePriority: number
        showHistory: boolean

        /** Save the changes made to the settings.
         *
         * If invalid settings are found, an error is thrown. */
        save(): void
    }

    type IepType = "Wdi" | "Wdo" | "Rdtbin"

    type Iep = InIep | OutIep | BinaryIep

    interface BaseIep {
        name: string
        key: string
        readonly type: IepType

        /**
         * Save the changes made to the iep.
         *
         * Creates the Iep if it's a new one, or updates the existing Iep */
        save(): void
    }

    type TaskPriority = "lower" | "low" | "medium" | "high"

    interface InIep extends BaseIep {
        type: "Wdi"
        rfsPriority: TaskPriority
        allowRdtDacs: boolean
        readonly url: string
    }

    interface OutIep extends BaseIep {
        type: "Wdo"
        url: string

        /**
         * Retry time interval.
         *
         * When null, the default interval from the server config is used.
         */
        retryIntervalSeconds: number | null

        /**
         * Retry time limit.
         *
         * When null, the default interval from the server config is used.
         */
        retryLimitSeconds: number | null
    }

    interface BinaryIep extends BaseIep {
        type: "Rdtbin"
        readonly url: string
    }

    enum MobilePlatforms {
        None = 0,
        Android = 8,
        Ios = 16
    }

    type BackofficeRole = "viewer" | "editor" | "companyadmin" | "superadmin" | "dev"

    interface User {
        readonly id: number
        name: string
        idpIssuer: "##microsoft##" | string | null
        email: string | null
        friendlyName: string
        extraData: string | null
        phoneNumber: string | null
        hardwareIdValidation: boolean
        mobilePlatforms: MobilePlatforms
        backofficeRole: BackofficeRole | null
        webformsAccess: boolean
        biAccess: boolean
        mfaEnabled: boolean

        /**
         * Set a new password for the user.
         *
         * The password must meet the password complexity requirements, otherwise an error is thrown.
         * You need to save the user with `save()` to apply the password change.
         */
        setPassword(password: string): void

        /**
         * Save the changes made to the user.
         *
         * Creates the user if it doesn't exist yet, and updates it if it already exists.
         * Saving a deleted user will throw an error. */
        save(): void

        /**
         * Deletes the user.
         *
         * You must not save the user after calling this function.
         */
        delete(): void

        /**
         * Assign the specified forms to the user.
         *
         * The user must be created, or else an error is thrown.
         *
         * @param forms The forms to assign.
         *  It may contain forms that are alredy assigned, no error is thrown.
         *  Currently existing assignments that are not in this list will be removed.
         */
        assignForms(forms: Form[]): void

        /**
         * Returns the list of forms currently assigned to the user.
         */
        readAssignedForms(): Form[]

        /**
         * Assign the specified dashboards to the user.
         *
         * The user must be created, or else an error is thrown.
         *
         * @param dashboardIds The names of the dashboards to assign.
         *  It may contain dashboards that are alredy assigned, no error is thrown.
         *  Currently existing assignments that are not in this list will be removed.
         */
        assignDashboards(dashboardIds: string[]): void

        /**
         * Returns the list of dashboard IDs currently assigned to the user.
         */
        readAssignedDashboards(): string[]

        /**
         * Send an activation mail to this user.
         *
         * The message will be sent at the end of the RFS run, unless the user is deleted.
         * Multiple calls to this function will result in only one mail being sent.
         */
        sendActivationEmail(): void

        /**
         * Send an install SMS to this user.
         *
         * The message will be sent at the end of the RFS run, unless the user is deleted.
         * Multiple calls to this function will result in only one message being sent.
         */
        sendInstallSms(): void
    }

    interface PackageInfo {
        readonly name: string
        readonly displayName: string
        readonly version: string
    }

    interface Form {
        readonly name: string
        readonly description: string
    }

    class Package {
        private constructor();

        readonly id: number

        readonly info: PackageInfo | null

        /** The forms in the package. */
        readonly forms: Form[]

        /**
         * Returns all packages that can be applied in companies.
         */
        static readUsable(): Package[]
    }

    interface RfsRun {
        /** Set the priority of the RFS task run. */
        SetPriority(priority: TaskPriority): void

        /** Set the parameters of the RFS task. */
        SetParams(params: any): void

        /** Schedule the RFS to run when this one is complete. */
        Run(): void
    }

    /**
     * Send an SMS text message to the specified phone number.
     *
     * The message is only sent if the RFS finishes successfully.
     * An error is thrown if the number or text is null.
     * The phone number is not validated, using an invalid phone number will result in a failed SMS task.
     *
     * @param phoneNumber The phone number. Must not be null.
     * @param text The text message to send. Must not be null. The length of the message is not validated - too long
     * messages may cause a failed task.
     */
    function SendSms(phoneNumber: string, text: string): void;

    interface Task {
        readonly type: TaskType
    }

    type TaskType = "XktConversion" | "PdfRender"

    type PdfRenderOutputFormat = "jpg" | "png"

    /**
     * A background task that converts an *.ifc BIM file to an .xkt file,
     * that can be used in the BIM viewer control.
     */
    class XktConversion implements Task {
        readonly type = "XktConversion"

        /** The mediaId or fileref of the file to convert. */
        readonly input: string | fileref

        /**
         * Create a new XktConversion task.
         *
         * @param input The mediaId or fileref of the file to convert.
         */
        constructor(input: string | fileref)
    }

    /**
     * A background task that renders a page of a PDF to an image.
     */
    class PdfRender implements Task {
        readonly type = "PdfRender"

        /** The mediaId or fileref of the PDF file to render. */
        readonly input: string | fileref

        /** The zero-based index of the page to render. */
        readonly pageIndex: number;

        /** The scale to use - a scale of N means 1pt in the PDF will be Npx in the image. */
        readonly scale: number;

        /** The image format of the output. */
        readonly outputFormat: "jpg" | "png";

        /**
         * Create a new PdfRender task.
         *
         * @param input The mediaId or fileref of the PDF file to render.
         * @param pageIndex The zero-based index of the page to render.
         * @param scale The scale to use - a scale of N means 1pt in the PDF will be Npx in the image.
         * @param outputFormat The image format of the output.
         */
        constructor(input: string | fileref, pageIndex: number, scale: number, outputFormat: PdfRenderOutputFormat);
    }

    /**
     * Start a background task.
     *
     * The task is only started if this script finishes successfully.
     *
     * @param task The task to run.
     * @param resultHandler A scheduled RFS that will be ran when the task completes.
     * @param priority The priority of the task, 'low' by default. Also used when enqueueing the resultHandler RFS.
     */
    function StartTask(task: Task, resultHandler: rfsref, priority?: TaskPriority): void

    interface TaskResult {
        readonly type: TaskType
    }

    interface XktConversionResult extends TaskResult {
        readonly inputMediaId: string
        readonly outputMediaId: string | null
        readonly success: boolean
        readonly buildings: XktConversionBuilding[] | null
    }

    interface PdfRenderResult extends TaskResult {
        readonly inputMediaId: string
        readonly outputMediaId: string | null
        readonly success: boolean
        readonly pageIndex: number
        readonly scale: number
        readonly outputFormat: PdfRenderOutputFormat
    }

    interface XktConversionBuilding {
        id: string,
        name: string,
        storeys: XktConversionStorey[]
    }

    interface XktConversionStorey {
        id: string,
        name: string
    }

    interface __rtab_filter<Type> {
        equal?: Type
        notEqual?: Type
        greaterThan?: Type
        lessThan?: Type
        greaterOrEqual?: Type
        lessOrEqual?: Type
        within?: Type[]
        notIn?: Type[]
    }

    type PickNullable<T> = {
        [P in keyof T as null extends T[P] ? P : never]: T[P]
    }

    type PickNotNullable<T> = {
        [P in keyof T as null extends T[P] ? never : P]: T[P]
    }
    type OptionalNullable<T> = {
        [K in keyof PickNullable<T>]?: T[K]
    } & {
        [K in keyof PickNotNullable<T>]: T[K]
    }

    class typed_table<TypeRow, TypeFilter, TypeFields> {
    }

    interface typed_table<TypeRow, TypeFilter, TypeFields extends keyof TypeRow> {
        /** Returns the list of rows from the table matching the criteria specified in the rvmapFbe parameter. Each returned row is converted to a map. */
        Read(rvmapFbe: TypeFilter): Array<TypeRow>;

        /** Returns the list of rows from the table matching the criteria specified in the rvmapFbe parameter, mapped to given field list in second parameter. Each returned row is converted to a map. */
        ReadFields(rvmapFbe: TypeFilter, rvrgFields: Array<TypeFields>): Array<Pick<TypeRow, TypeFields>>;

        /** Updates the row specified by the rvmapWhere parameter with the values set by the rvmapSet parameter. Error occurs if rvmapWhere matches multiple rows. */
        Update(rvmapWhere: TypeFilter, rvmapSet: Partial<TypeRow>): void;

        /** Updates the rows specified by the rvmapWhere parameter with the values set by the rvmapSet parameter. */
        UpdateMany(rvmapWhere: TypeFilter, rvmapSet: Partial<TypeRow>): void;

        /** Inserts the row specified by the rvmapWhere parameter to the table.
         If the row already presents, updates it with rvmapSet.
         In the later case rvmapWhere should match precisely one row in the table. */
        InsertOrUpdate(rvmapWhere: TypeFilter, rvmapSet: Partial<TypeRow>): void;

        /** Inserts the specified row the the table. Error occurs if the table already contains the row. */
        Insert(rvmapInsert: OptionalNullable<TypeRow>): void;
		
        /** Deletes the specified row from the table. Error occurs if rvmapWhere matches multiple rows. */
        Delete(rvmapWhere: TypeFilter): void;

        /** Deletes the specified row(s) from the table. */
        DeleteMany(rvmapWhere: TypeFilter): void;

        /** Locks the specified row(s) until the end of the RFS run. Throws an error if the lock cannot be acquired and returns the locked rows. */
        Lock(rvmapWhere: TypeFilter): Array<TypeRow>;

        /** Locks the specified row(s) in shared mode until the end of the RFS run. Throws an error if the lock cannot be acquired and returns the locked rows. */
        LockShared(rvmapWhere: TypeFilter): Array<TypeRow>;
    }

    interface Array<T> {
        /** Initializes a new list object based this list. */
        Clone(): Array<T>;

        /** Adds an object to the end of the list. */
        Add(rvItem: T): void;

        /** Gets the number of items in the list. */
        Count(): number;

        /** Retrieves the item in the list in the specified position. The [] operator can also be used for this purpose. */
        GetAt(index: number): T;

        /** Sets the item in the list in the specified position. The [] operator can also be used for this purpose. */
        SetAt(index: number, rvItem: T): void;

        /** Removes and returns the item at the specified index. */
        RemoveAt(index: number): T;

        /** Returns the single element of the list. An error occurs if the list is empy or contains more elements. */
        Single(): T;

        /** Returns the single element of the list or null if the list is empty. An error occurs if the list contains more elements. */
        SingleOrDefault(): T | null;
        
        /** Returns the contents of the list and the other list in a new list. */
        Concat(other: list): list;
    }

    interface __typed_message_factory<T> {
        New(): T;
    }

    interface SafeHtml {
        value: any;

        print(): pdf;
    }

    type HtmlTemplateParam = string | SafeHtml | SafeHtml[]

    function html(parts: TemplateStringsArray, ...params: HtmlTemplateParam[]): SafeHtml
}

// ---- solution dependent code starts here ---

declare global {
	interface __db_type {
		"calculatedResults": typed_table<reftab_row_calculatedResults, reftab_filter_calculatedResults, reftab_columns_calculatedResults>
		"environment": typed_table<reftab_row_environment, reftab_filter_environment, reftab_columns_environment>
		"environmentValues": typed_table<reftab_row_environmentValues, reftab_filter_environmentValues, reftab_columns_environmentValues>
		"holidays": typed_table<reftab_row_holidays, reftab_filter_holidays, reftab_columns_holidays>
		"jira_list": typed_table<reftab_row_jira_list, reftab_filter_jira_list, reftab_columns_jira_list>
		"manualTests": typed_table<reftab_row_manualTests, reftab_filter_manualTests, reftab_columns_manualTests>
		"manualTestsMedia": typed_table<reftab_row_manualTestsMedia, reftab_filter_manualTestsMedia, reftab_columns_manualTestsMedia>
		"projectRole": typed_table<reftab_row_projectRole, reftab_filter_projectRole, reftab_columns_projectRole>
		"reportparams": typed_table<reftab_row_reportparams, reftab_filter_reportparams, reftab_columns_reportparams>
		"task": typed_table<reftab_row_task, reftab_filter_task, reftab_columns_task>
		"tc_jira_list": typed_table<reftab_row_tc_jira_list, reftab_filter_tc_jira_list, reftab_columns_tc_jira_list>
		"tc_list": typed_table<reftab_row_tc_list, reftab_filter_tc_list, reftab_columns_tc_list>
		"tc_tag": typed_table<reftab_row_tc_tag, reftab_filter_tc_tag, reftab_columns_tc_tag>
		"test_case": typed_table<reftab_row_test_case, reftab_filter_test_case, reftab_columns_test_case>
		"test_case_tag": typed_table<reftab_row_test_case_tag, reftab_filter_test_case_tag, reftab_columns_test_case_tag>
		"test_to_be_write_category": typed_table<reftab_row_test_to_be_write_category, reftab_filter_test_to_be_write_category, reftab_columns_test_to_be_write_category>
		"test_to_be_write_done": typed_table<reftab_row_test_to_be_write_done, reftab_filter_test_to_be_write_done, reftab_columns_test_to_be_write_done>
		"test_to_be_write_tags": typed_table<reftab_row_test_to_be_write_tags, reftab_filter_test_to_be_write_tags, reftab_columns_test_to_be_write_tags>
		"test_to_be_write_tickets": typed_table<reftab_row_test_to_be_write_tickets, reftab_filter_test_to_be_write_tickets, reftab_columns_test_to_be_write_tickets>
		"testedVersion": typed_table<reftab_row_testedVersion, reftab_filter_testedVersion, reftab_columns_testedVersion>
		"tester": typed_table<reftab_row_tester, reftab_filter_tester, reftab_columns_tester>
		"testingChecklist": typed_table<reftab_row_testingChecklist, reftab_filter_testingChecklist, reftab_columns_testingChecklist>
		"userRole": typed_table<reftab_row_userRole, reftab_filter_userRole, reftab_columns_userRole>
		"userState": typed_table<reftab_row_userState, reftab_filter_userState, reftab_columns_userState>
		"versions": typed_table<reftab_row_versions, reftab_filter_versions, reftab_columns_versions>
	}
	const db: __db_type;
}
declare global {
	interface __reports_type {
		"generate_Report": __report_ref
	}
	const reports: __reports_type;
}
declare global {
	interface __rfs_type {
		"dashboard": rfsref
		"envVarSave": rfsref
		"generate_Report": rfsref
		"holidays": rfsref
		"lib": rfsref
		"manualTestWriter": rfsref
		"progressLog": rfsref
		"saveProjektDetails": rfsref
		"savetestingStatus": rfsref
		"task_execution": rfsref
		"taskReassign": rfsref
		"testcase_monitor": rfsref
		"testcase_writer": rfsref
		"testCasesLinks": rfsref
		"testers": rfsref
		"testFixed": rfsref
		"version_control": rfsref
	}
	const rfs: __rfs_type;
}
declare global {
	interface __events_type {
	}
	const events: __events_type;
}
declare global {
	interface __messages_type {
	}
	const messages: __messages_type;
}
declare global {
	interface __forms_type {
		"badtestcaselist": __formref_type
		"dashboard": __formref_type
		"enviromentVariableEdit": __formref_type
		"generate_Report": __formref_type
		"holidaysDayOff": __formref_type
		"manualTestWriter": __formref_type
		"projektDetails": __formref_type
		"task_execution": __formref_type
		"task_reassign": __formref_type
		"tclinks": __formref_type
		"testcase_monitor": __formref_type
		"testcase_writer": __formref_type
		"testers": __formref_type
		"testingStatus": __formref_type
		"version_control": __formref_type
	}
	const forms: __forms_type;
}
declare global {
/** column type for reference table environment */
	type reftab_columns_environment = 'env_name'|'tester_email'|'tester_name'|'env_detail'|'default_workingday'
/** row type for reference table environment */
	interface reftab_row_environment {
/** column env_name: Text primary key, not null */
		"env_name": string
/** column tester_email: Text  */
		"tester_email": string | null
/** column tester_name: Text  */
		"tester_name": string | null
/** column env_detail: Text  */
		"env_detail": string | null
/** column default_workingday: Float  */
		"default_workingday": number | null
	}
/** filter type for reference table environment */
	interface reftab_filter_environment {
		"env_name"?: string | Array<string> | null | __rtab_filter<string>
		"tester_email"?: string | Array<string> | null | __rtab_filter<string>
		"tester_name"?: string | Array<string> | null | __rtab_filter<string>
		"env_detail"?: string | Array<string> | null | __rtab_filter<string>
		"default_workingday"?: number | Array<number> | null | __rtab_filter<number>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_environment>
	}
}
declare global {
/** column type for reference table environmentValues */
	type reftab_columns_environmentValues = 'name'|'value'|'project'
/** row type for reference table environmentValues */
	interface reftab_row_environmentValues {
/** column name: Text primary key, not null */
		"name": string
/** column value: Text  */
		"value": string | null
/** column project: Text primary key, not null */
		"project": string
	}
/** filter type for reference table environmentValues */
	interface reftab_filter_environmentValues {
		"name"?: string | Array<string> | null | __rtab_filter<string>
		"value"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_environmentValues>
	}
}
declare global {
/** column type for reference table calculatedResults */
	type reftab_columns_calculatedResults = 'Type'|'participate'|'totalCount'|'doneCount'|'leftCount'|'requiredHours'|'requiredDays'|'finishDate'|'finishDateExtended'|'plannedFinish'|'project'|'version'
/** row type for reference table calculatedResults */
	interface reftab_row_calculatedResults {
/** column Type: Text  */
		"Type": string | null
/** column participate: Float  */
		"participate": number | null
/** column totalCount: Integer  */
		"totalCount": number | null
/** column doneCount: Integer  */
		"doneCount": number | null
/** column leftCount: Integer  */
		"leftCount": number | null
/** column requiredHours: Float  */
		"requiredHours": number | null
/** column requiredDays: Integer  */
		"requiredDays": number | null
/** column finishDate: Date  */
		"finishDate": dtdb | null
/** column finishDateExtended: Date  */
		"finishDateExtended": dtdb | null
/** column plannedFinish: Date  */
		"plannedFinish": dtdb | null
/** column project: Text  */
		"project": string | null
/** column version: Text  */
		"version": string | null
	}
/** filter type for reference table calculatedResults */
	interface reftab_filter_calculatedResults {
		"Type"?: string | Array<string> | null | __rtab_filter<string>
		"participate"?: number | Array<number> | null | __rtab_filter<number>
		"totalCount"?: number | Array<number> | null | __rtab_filter<number>
		"doneCount"?: number | Array<number> | null | __rtab_filter<number>
		"leftCount"?: number | Array<number> | null | __rtab_filter<number>
		"requiredHours"?: number | Array<number> | null | __rtab_filter<number>
		"requiredDays"?: number | Array<number> | null | __rtab_filter<number>
		"finishDate"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"finishDateExtended"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"plannedFinish"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		"version"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_calculatedResults>
	}
}
declare global {
/** column type for reference table jira_list */
	type reftab_columns_jira_list = 'Key'|'Summary'|'Reporter'
/** row type for reference table jira_list */
	interface reftab_row_jira_list {
/** column Key: Text  */
		"Key": string | null
/** column Summary: Text  */
		"Summary": string | null
/** column Reporter: Text  */
		"Reporter": string | null
	}
/** filter type for reference table jira_list */
	interface reftab_filter_jira_list {
		"Key"?: string | Array<string> | null | __rtab_filter<string>
		"Summary"?: string | Array<string> | null | __rtab_filter<string>
		"Reporter"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_jira_list>
	}
}
declare global {
/** column type for reference table holidays */
	type reftab_columns_holidays = 'id'|'dateFrom'|'dateTo'|'user'|'categoryId'
/** row type for reference table holidays */
	interface reftab_row_holidays {
/** column id: Text  */
		"id": string | null
/** column dateFrom: Date  */
		"dateFrom": dtdb | null
/** column dateTo: Date  */
		"dateTo": dtdb | null
/** column user: Text  */
		"user": string | null
/** column categoryId: Text  */
		"categoryId": string | null
	}
/** filter type for reference table holidays */
	interface reftab_filter_holidays {
		"id"?: string | Array<string> | null | __rtab_filter<string>
		"dateFrom"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"dateTo"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"user"?: string | Array<string> | null | __rtab_filter<string>
		"categoryId"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_holidays>
	}
}
declare global {
/** column type for reference table manualTests */
	type reftab_columns_manualTests = 'TestId'|'Step'|'Expected'|'Task'|'Photo'|'Platform'|'project'
/** row type for reference table manualTests */
	interface reftab_row_manualTests {
/** column TestId: Text primary key, not null */
		"TestId": string
/** column Step: Integer primary key, not null */
		"Step": number
/** column Expected: Text  */
		"Expected": string | null
/** column Task: Text  */
		"Task": string | null
/** column Photo: Integer  */
		"Photo": number | null
/** column Platform: Text  */
		"Platform": string | null
/** column project: Text not null */
		"project": string
	}
/** filter type for reference table manualTests */
	interface reftab_filter_manualTests {
		"TestId"?: string | Array<string> | null | __rtab_filter<string>
		"Step"?: number | Array<number> | null | __rtab_filter<number>
		"Expected"?: string | Array<string> | null | __rtab_filter<string>
		"Task"?: string | Array<string> | null | __rtab_filter<string>
		"Photo"?: number | Array<number> | null | __rtab_filter<number>
		"Platform"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_manualTests>
	}
}
declare global {
/** column type for reference table manualTestsMedia */
	type reftab_columns_manualTestsMedia = 'TestId'|'mediaId'|'Step'|'project'
/** row type for reference table manualTestsMedia */
	interface reftab_row_manualTestsMedia {
/** column TestId: Text  */
		"TestId": string | null
/** column mediaId: Text  */
		"mediaId": string | null
/** column Step: Integer  */
		"Step": number | null
/** column project: Text not null */
		"project": string
	}
/** filter type for reference table manualTestsMedia */
	interface reftab_filter_manualTestsMedia {
		"TestId"?: string | Array<string> | null | __rtab_filter<string>
		"mediaId"?: string | Array<string> | null | __rtab_filter<string>
		"Step"?: number | Array<number> | null | __rtab_filter<number>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_manualTestsMedia>
	}
}
declare global {
/** column type for reference table projectRole */
	type reftab_columns_projectRole = 'tester_name'|'tester_role'|'project'
/** row type for reference table projectRole */
	interface reftab_row_projectRole {
/** column tester_name: Text primary key, not null */
		"tester_name": string
/** column tester_role: Text primary key, not null */
		"tester_role": string
/** column project: Text primary key, not null */
		"project": string
	}
/** filter type for reference table projectRole */
	interface reftab_filter_projectRole {
		"tester_name"?: string | Array<string> | null | __rtab_filter<string>
		"tester_role"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_projectRole>
	}
}
declare global {
/** column type for reference table reportparams */
	type reftab_columns_reportparams = 'name'|'filterdate'|'project'|'version'
/** row type for reference table reportparams */
	interface reftab_row_reportparams {
/** column name: Text  */
		"name": string | null
/** column filterdate: Date  */
		"filterdate": dtdb | null
/** column project: Text  */
		"project": string | null
/** column version: Text  */
		"version": string | null
	}
/** filter type for reference table reportparams */
	interface reftab_filter_reportparams {
		"name"?: string | Array<string> | null | __rtab_filter<string>
		"filterdate"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		"version"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_reportparams>
	}
}
declare global {
/** column type for reference table tc_list */
	type reftab_columns_tc_list = 'tc_id'|'tc_prio'|'tc_impreg'|'tc_desc'|'last_status'|'last_sent_in'|'note'|'mainVersion'|'project'
/** row type for reference table tc_list */
	interface reftab_row_tc_list {
/** column tc_id: Text  */
		"tc_id": string | null
/** column tc_prio: Text  */
		"tc_prio": string | null
/** column tc_impreg: Text  */
		"tc_impreg": string | null
/** column tc_desc: Text  */
		"tc_desc": string | null
/** column last_status: Text  */
		"last_status": string | null
/** column last_sent_in: Date  */
		"last_sent_in": dtdb | null
/** column note: Text  */
		"note": string | null
/** column mainVersion: Text  */
		"mainVersion": string | null
/** column project: Text  */
		"project": string | null
	}
/** filter type for reference table tc_list */
	interface reftab_filter_tc_list {
		"tc_id"?: string | Array<string> | null | __rtab_filter<string>
		"tc_prio"?: string | Array<string> | null | __rtab_filter<string>
		"tc_impreg"?: string | Array<string> | null | __rtab_filter<string>
		"tc_desc"?: string | Array<string> | null | __rtab_filter<string>
		"last_status"?: string | Array<string> | null | __rtab_filter<string>
		"last_sent_in"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"note"?: string | Array<string> | null | __rtab_filter<string>
		"mainVersion"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_tc_list>
	}
}
declare global {
/** column type for reference table task */
	type reftab_columns_task = 'guid'|'task_id'|'result'|'version'|'env_name'|'note'|'start_tc_date'|'end_tc_date'|'task_type'|'platformID'|'time_need'|'saved'|'project'|'assigned_version'
/** row type for reference table task */
	interface reftab_row_task {
/** column guid: Text primary key, not null */
		"guid": string
/** column task_id: Text not null */
		"task_id": string
/** column result: Text  */
		"result": string | null
/** column version: Text  */
		"version": string | null
/** column env_name: Text  */
		"env_name": string | null
/** column note: Text  */
		"note": string | null
/** column start_tc_date: Date  */
		"start_tc_date": dtdb | null
/** column end_tc_date: Date  */
		"end_tc_date": dtdb | null
/** column task_type: Text  */
		"task_type": string | null
/** column platformID: Text not null */
		"platformID": string
/** column time_need: Text  */
		"time_need": string | null
/** column saved: Integer  */
		"saved": number | null
/** column project: Text  */
		"project": string | null
/** column assigned_version: Text not null */
		"assigned_version": string
	}
/** filter type for reference table task */
	interface reftab_filter_task {
		"guid"?: string | Array<string> | null | __rtab_filter<string>
		"task_id"?: string | Array<string> | null | __rtab_filter<string>
		"result"?: string | Array<string> | null | __rtab_filter<string>
		"version"?: string | Array<string> | null | __rtab_filter<string>
		"env_name"?: string | Array<string> | null | __rtab_filter<string>
		"note"?: string | Array<string> | null | __rtab_filter<string>
		"start_tc_date"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"end_tc_date"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"task_type"?: string | Array<string> | null | __rtab_filter<string>
		"platformID"?: string | Array<string> | null | __rtab_filter<string>
		"time_need"?: string | Array<string> | null | __rtab_filter<string>
		"saved"?: number | Array<number> | null | __rtab_filter<number>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		"assigned_version"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_task>
	}
}
declare global {
/** column type for reference table testedVersion */
	type reftab_columns_testedVersion = 'version'|'platformID'|'mainVersion'|'addedDate'
/** row type for reference table testedVersion */
	interface reftab_row_testedVersion {
/** column version: Text primary key, not null */
		"version": string
/** column platformID: Text not null */
		"platformID": string
/** column mainVersion: Text primary key, not null */
		"mainVersion": string
/** column addedDate: Date  */
		"addedDate": dtdb | null
	}
/** filter type for reference table testedVersion */
	interface reftab_filter_testedVersion {
		"version"?: string | Array<string> | null | __rtab_filter<string>
		"platformID"?: string | Array<string> | null | __rtab_filter<string>
		"mainVersion"?: string | Array<string> | null | __rtab_filter<string>
		"addedDate"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_testedVersion>
	}
}
declare global {
/** column type for reference table tc_jira_list */
	type reftab_columns_tc_jira_list = 'jira_id'|'task_id'|'env_name'|'platform'|'tested_version'|'jira_state'|'mainVersion'|'project'
/** row type for reference table tc_jira_list */
	interface reftab_row_tc_jira_list {
/** column jira_id: Text  */
		"jira_id": string | null
/** column task_id: Text  */
		"task_id": string | null
/** column env_name: Text  */
		"env_name": string | null
/** column platform: Text  */
		"platform": string | null
/** column tested_version: Text  */
		"tested_version": string | null
/** column jira_state: Text  */
		"jira_state": string | null
/** column mainVersion: Text  */
		"mainVersion": string | null
/** column project: Text  */
		"project": string | null
	}
/** filter type for reference table tc_jira_list */
	interface reftab_filter_tc_jira_list {
		"jira_id"?: string | Array<string> | null | __rtab_filter<string>
		"task_id"?: string | Array<string> | null | __rtab_filter<string>
		"env_name"?: string | Array<string> | null | __rtab_filter<string>
		"platform"?: string | Array<string> | null | __rtab_filter<string>
		"tested_version"?: string | Array<string> | null | __rtab_filter<string>
		"jira_state"?: string | Array<string> | null | __rtab_filter<string>
		"mainVersion"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_tc_jira_list>
	}
}
declare global {
/** column type for reference table tc_tag */
	type reftab_columns_tc_tag = 'tag'
/** row type for reference table tc_tag */
	interface reftab_row_tc_tag {
/** column tag: Text primary key, not null */
		"tag": string
	}
/** filter type for reference table tc_tag */
	interface reftab_filter_tc_tag {
		"tag"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_tc_tag>
	}
}
declare global {
/** column type for reference table tester */
	type reftab_columns_tester = 'tester_name'|'tester_email'|'work_type'|'tester_active'|'participation'
/** row type for reference table tester */
	interface reftab_row_tester {
/** column tester_name: Text  */
		"tester_name": string | null
/** column tester_email: Text  */
		"tester_email": string | null
/** column work_type: Text  */
		"work_type": string | null
/** column tester_active: Text  */
		"tester_active": string | null
/** column participation: Float  */
		"participation": number | null
	}
/** filter type for reference table tester */
	interface reftab_filter_tester {
		"tester_name"?: string | Array<string> | null | __rtab_filter<string>
		"tester_email"?: string | Array<string> | null | __rtab_filter<string>
		"work_type"?: string | Array<string> | null | __rtab_filter<string>
		"tester_active"?: string | Array<string> | null | __rtab_filter<string>
		"participation"?: number | Array<number> | null | __rtab_filter<number>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_tester>
	}
}
declare global {
/** column type for reference table test_case_tag */
	type reftab_columns_test_case_tag = 'tc_id'|'tag'|'platform'
/** row type for reference table test_case_tag */
	interface reftab_row_test_case_tag {
/** column tc_id: Text primary key, not null */
		"tc_id": string
/** column tag: Text primary key, not null */
		"tag": string
/** column platform: Text primary key, not null */
		"platform": string
	}
/** filter type for reference table test_case_tag */
	interface reftab_filter_test_case_tag {
		"tc_id"?: string | Array<string> | null | __rtab_filter<string>
		"tag"?: string | Array<string> | null | __rtab_filter<string>
		"platform"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_test_case_tag>
	}
}
declare global {
/** column type for reference table testingChecklist */
	type reftab_columns_testingChecklist = 'id'|'done'|'task'|'ordernum'|'project'
/** row type for reference table testingChecklist */
	interface reftab_row_testingChecklist {
/** column id: Text primary key, not null */
		"id": string
/** column done: Integer  */
		"done": number | null
/** column task: Text  */
		"task": string | null
/** column ordernum: Integer  */
		"ordernum": number | null
/** column project: Text primary key, not null */
		"project": string
	}
/** filter type for reference table testingChecklist */
	interface reftab_filter_testingChecklist {
		"id"?: string | Array<string> | null | __rtab_filter<string>
		"done"?: number | Array<number> | null | __rtab_filter<number>
		"task"?: string | Array<string> | null | __rtab_filter<string>
		"ordernum"?: number | Array<number> | null | __rtab_filter<number>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_testingChecklist>
	}
}
declare global {
/** column type for reference table test_to_be_write_done */
	type reftab_columns_test_to_be_write_done = 'category'|'id'|'label'|'type'|'platform'|'status'|'location'|'creator'|'note'|'PreCond'|'project'|'version'
/** row type for reference table test_to_be_write_done */
	interface reftab_row_test_to_be_write_done {
/** column category: Text  */
		"category": string | null
/** column id: Text primary key, not null */
		"id": string
/** column label: Text  */
		"label": string | null
/** column type: Text  */
		"type": string | null
/** column platform: Text  */
		"platform": string | null
/** column status: Text  */
		"status": string | null
/** column location: Text  */
		"location": string | null
/** column creator: Text  */
		"creator": string | null
/** column note: Text  */
		"note": string | null
/** column PreCond: Text  */
		"PreCond": string | null
/** column project: Text  */
		"project": string | null
/** column version: Text  */
		"version": string | null
	}
/** filter type for reference table test_to_be_write_done */
	interface reftab_filter_test_to_be_write_done {
		"category"?: string | Array<string> | null | __rtab_filter<string>
		"id"?: string | Array<string> | null | __rtab_filter<string>
		"label"?: string | Array<string> | null | __rtab_filter<string>
		"type"?: string | Array<string> | null | __rtab_filter<string>
		"platform"?: string | Array<string> | null | __rtab_filter<string>
		"status"?: string | Array<string> | null | __rtab_filter<string>
		"location"?: string | Array<string> | null | __rtab_filter<string>
		"creator"?: string | Array<string> | null | __rtab_filter<string>
		"note"?: string | Array<string> | null | __rtab_filter<string>
		"PreCond"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		"version"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_test_to_be_write_done>
	}
}
declare global {
/** column type for reference table test_to_be_write_category */
	type reftab_columns_test_to_be_write_category = 'category'|'planned_count'|'finished'|'closedByTesters'|'testerWhoClosed'|'result_count'|'active'|'mainVersion'|'project'
/** row type for reference table test_to_be_write_category */
	interface reftab_row_test_to_be_write_category {
/** column category: Text  */
		"category": string | null
/** column planned_count: Integer  */
		"planned_count": number | null
/** column finished: Integer  */
		"finished": number | null
/** column closedByTesters: Integer  */
		"closedByTesters": number | null
/** column testerWhoClosed: Text  */
		"testerWhoClosed": string | null
/** column result_count: Integer  */
		"result_count": number | null
/** column active: Integer  */
		"active": number | null
/** column mainVersion: Text  */
		"mainVersion": string | null
/** column project: Text  */
		"project": string | null
	}
/** filter type for reference table test_to_be_write_category */
	interface reftab_filter_test_to_be_write_category {
		"category"?: string | Array<string> | null | __rtab_filter<string>
		"planned_count"?: number | Array<number> | null | __rtab_filter<number>
		"finished"?: number | Array<number> | null | __rtab_filter<number>
		"closedByTesters"?: number | Array<number> | null | __rtab_filter<number>
		"testerWhoClosed"?: string | Array<string> | null | __rtab_filter<string>
		"result_count"?: number | Array<number> | null | __rtab_filter<number>
		"active"?: number | Array<number> | null | __rtab_filter<number>
		"mainVersion"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_test_to_be_write_category>
	}
}
declare global {
/** column type for reference table test_to_be_write_tags */
	type reftab_columns_test_to_be_write_tags = 'id'|'tag'
/** row type for reference table test_to_be_write_tags */
	interface reftab_row_test_to_be_write_tags {
/** column id: Text primary key, not null */
		"id": string
/** column tag: Text primary key, not null */
		"tag": string
	}
/** filter type for reference table test_to_be_write_tags */
	interface reftab_filter_test_to_be_write_tags {
		"id"?: string | Array<string> | null | __rtab_filter<string>
		"tag"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_test_to_be_write_tags>
	}
}
declare global {
/** column type for reference table test_case */
	type reftab_columns_test_case = 'id'|'tc_description'|'platform'|'link'|'time'|'addedDate'|'lastAssigned'|'PreCond'|'project'
/** row type for reference table test_case */
	interface reftab_row_test_case {
/** column id: Text primary key, not null */
		"id": string
/** column tc_description: Text  */
		"tc_description": string | null
/** column platform: Text primary key, not null */
		"platform": string
/** column link: Text  */
		"link": string | null
/** column time: Float  */
		"time": number | null
/** column addedDate: Date  */
		"addedDate": dtdb | null
/** column lastAssigned: Date  */
		"lastAssigned": dtdb | null
/** column PreCond: Text  */
		"PreCond": string | null
/** column project: Text not null */
		"project": string
	}
/** filter type for reference table test_case */
	interface reftab_filter_test_case {
		"id"?: string | Array<string> | null | __rtab_filter<string>
		"tc_description"?: string | Array<string> | null | __rtab_filter<string>
		"platform"?: string | Array<string> | null | __rtab_filter<string>
		"link"?: string | Array<string> | null | __rtab_filter<string>
		"time"?: number | Array<number> | null | __rtab_filter<number>
		"addedDate"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"lastAssigned"?: dtdb | Array<dtdb> | null | __rtab_filter<dtdb>
		"PreCond"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_test_case>
	}
}
declare global {
/** column type for reference table test_to_be_write_tickets */
	type reftab_columns_test_to_be_write_tickets = 'id'|'ticket'
/** row type for reference table test_to_be_write_tickets */
	interface reftab_row_test_to_be_write_tickets {
/** column id: Text primary key, not null */
		"id": string
/** column ticket: Text primary key, not null */
		"ticket": string
	}
/** filter type for reference table test_to_be_write_tickets */
	interface reftab_filter_test_to_be_write_tickets {
		"id"?: string | Array<string> | null | __rtab_filter<string>
		"ticket"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_test_to_be_write_tickets>
	}
}
declare global {
/** column type for reference table userState */
	type reftab_columns_userState = 'tester_name'|'active_project'
/** row type for reference table userState */
	interface reftab_row_userState {
/** column tester_name: Text primary key, not null */
		"tester_name": string
/** column active_project: Text primary key, not null */
		"active_project": string
	}
/** filter type for reference table userState */
	interface reftab_filter_userState {
		"tester_name"?: string | Array<string> | null | __rtab_filter<string>
		"active_project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_userState>
	}
}
declare global {
/** column type for reference table userRole */
	type reftab_columns_userRole = 'tester_email'|'role'|'project'
/** row type for reference table userRole */
	interface reftab_row_userRole {
/** column tester_email: Text primary key, not null */
		"tester_email": string
/** column role: Text primary key, not null */
		"role": string
/** column project: Text primary key, not null */
		"project": string
	}
/** filter type for reference table userRole */
	interface reftab_filter_userRole {
		"tester_email"?: string | Array<string> | null | __rtab_filter<string>
		"role"?: string | Array<string> | null | __rtab_filter<string>
		"project"?: string | Array<string> | null | __rtab_filter<string>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_userRole>
	}
}
declare global {
/** column type for reference table versions */
	type reftab_columns_versions = 'project'|'version'|'current'
/** row type for reference table versions */
	interface reftab_row_versions {
/** column project: Text primary key, not null */
		"project": string
/** column version: Text primary key, not null */
		"version": string
/** column current: Integer  */
		"current": number | null
	}
/** filter type for reference table versions */
	interface reftab_filter_versions {
		"project"?: string | Array<string> | null | __rtab_filter<string>
		"version"?: string | Array<string> | null | __rtab_filter<string>
		"current"?: number | Array<number> | null | __rtab_filter<number>
		 _limit?: number
		 _offset?: number
		 _orderBy?: Array<reftab_columns_versions>
	}
}
declare global {
    interface form_enviromentVariableEdit extends __form_base_type {
        "envVariableTb": {
            "rows": Array<{
                "envName": {
                    "text": string
                }
                "envValue": {
                    "text": string
                }
            }>
        }
        "user_proj": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_generate_Report extends __form_base_type {
        "name": {
            "text": string
        }
        "to": {
            "text": string
        }
        "filterdate": {
            "date": dtl
        }
        "generateTcReport": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "generateAssignedTcList": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "user_proj": string
        "currentVersion": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_badtestcaselist extends __form_base_type {
        "badtclist": {
            "rows": Array<{
                "task_id": {
                    "text": string
                }
                "result": {
                    "text": string
                }
                "note": {
                    "text": string
                }
                "fixSubmit": {
                    "submitter": boolean
                    "closeForm": boolean
                    "validatorGroup": string
                }
            }>
        }
        "user_proj": string
        "currentVersion": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_dashboard extends __form_base_type {
        "changeppop": {
            "projectTable": {
                "rows": Array<{
                    "project": {
                        "text": string
                    }
                    "changeProjectSubmit": {
                        "submitter": boolean
                    }
                }>
            }
        }
        "recRun": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "savePlannedRun": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "result": Array<{
            "plannedFinish": dtl
            "doneCount": number
            "totalCount": number
            "participate": number
            "leftCount": number
            "requiredHours": number
            "requiredDays": number
            "finishDate": dtl
        }>
        "recWrite": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "savePlannedWrite": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "resultW": Array<{
            "plannedFinish": dtl
            "doneCount": number
            "totalCount": number
            "participate": number
            "leftCount": number
            "requiredHours": number
            "requiredDays": number
            "finishDate": dtl
            "finishDateExtended": dtl
        }>
        "task_list_table_j": {
            "filter_taskid": {
                "text": string
            }
            "rows": Array<{
                "add_tcs_status": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
            }>
        }
        "tester_by_result": {
            "unassigned_j": number
            "not_yet_started_sum_j": {
                "text": string
            }
            "closed_sum_j": {
                "text": string
            }
            "all_jira_ver_sum": {
                "text": string
            }
            "rows": Array<{
                "not_yet_started_j": {
                    "text": string
                }
                "closed_j": {
                    "text": string
                }
            }>
        }
        "testersCount": number
        "today": dtl
        "left_from_today_hour": number
        "left_from_today_minut": number
        "remains_from_today_hour": number
        "jira_done": string
        "jira_sum": string
        "user_proj": string
        "currentVersion": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_projektDetails extends __form_base_type {
        "env_name": {
            "text": string
        }
        "env_detail": {
            "text": string
        }
        "env_tester": {
            "selectedKey": string
            "selectedText": string
            "selectedValue": {
                "tester_name": string
                "tester_email": string
            }
        }
        "tbEnviromnents": {
            "rows": Array<{
                "envName": {
                    "text": string
                }
                "envTestername": {
                    "text": string
                }
                "envTesterMail": {
                    "text": string
                }
                "envDetail": {
                    "text": string
                }
                "new": number
                "deleted": number
            }>
        }
        "ver_name": {
            "text": string
        }
        "ver_platform": {
            "selectedKey": string
            "selectedText": string
            "selectedValue": {
                "v": string
            }
        }
        "tbVersions": {
            "rows": Array<{
                "verName": {
                    "text": string
                }
                "verPlatform": {
                    "text": string
                }
                "mainVersion": {
                    "text": string
                }
                "new": number
                "deleted": number
            }>
        }
        "user_proj": string
        "currentVersion": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_holidaysDayOff extends __form_base_type {
        "calPage1": {
            "date": dtl
        }
        "cal": {
            "newEvent": {
                "dateFrom": dtl
                "dateTo": dtl
            }
            "events": Array<{
                "id": string
                "categoryId": string
                "dateFrom": dtl
                "dateTo": dtl
                "label": string
            }>
            "selectedEvent": {
                "id": string
                "categoryId": string
                "dateFrom": dtl
                "dateTo": dtl
                "label": string
            }
        }
        "Delete": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "Add": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "adminPanel": {
            "UserType": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "v": string
                }
            }
            "CustomUser": {
                "CustomUserName": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "tester_email": string
                    }
                }
                "cond": boolean
            }
            "cond": boolean
        }
        "newEvent": Array<{
            "id": string
            "categoryId": string
            "dateFrom": dtl
            "dateTo": dtl
            "user": string
        }>
        "selectedEvent": string
        "userName": string
        "stLoggedUserRole": string
        "eventsAll": Array<{
            "id": string
            "categoryId": string
            "dateFrom": dtl
            "dateTo": dtl
            "label": string
        }>
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_task_reassign extends __form_base_type {
        "btns": {
            "modify_to_env": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "env_name": string
                }
            }
            "assignBtnUpper": {
                "submitter": boolean
                "closeForm": boolean
                "validatorGroup": string
            }
        }
        "tsk": {
            "filter_platform": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "v": string
                }
            }
            "filter_taskid": {
                "text": string
            }
            "filter_result": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "v": string
                }
            }
            "filter_envname": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "env_name": string
                }
            }
            "rows": Array<{
                "tsk_guid": {
                    "text": string
                }
                "tsk_platform": {
                    "text": string
                }
                "tskid": {
                    "text": string
                }
                "tsk_result": {
                    "text": string
                }
                "tsk_actual_env": {
                    "text": string
                }
                "mark_to_reassign": {
                    "checked": boolean
                }
            }>
        }
        "assignBtnButton": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "letpage": number
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_manualTestWriter extends __form_base_type {
        "TcId": {
            "text": string
        }
        "newTcId": {
            "text": string
        }
        "createTcId": {
            "text": string
        }
        "newTcDesc": {
            "text": string
        }
        "newTcPrecond": {
            "text": string
        }
        "newTC": {
            "rows": Array<{
                "iStep": {
                    "submitter": boolean
                    "closeForm": boolean
                    "validatorGroup": string
                }
                "stepTask": {
                    "text": string
                }
                "newTcPlatform": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "task": {
                    "text": string
                }
                "expect": {
                    "text": string
                }
                "photoUpload": {
                    "photos": Array<{
                        "photoId": string
                        "datetime": dtl
                        "locationLatitude": number
                        "locationLongitude": number
                        "locationAltitude": number
                        "locationAccuracy": number
                        "locationDtuAcquired": dtl
                        "fileSize": number
                        "height": number
                        "width": number
                        "type": string
                        "duration": number
                    }>
                }
                "hasPhoto": number
                "stepCount": number
            }>
        }
        "editTC": {
            "rows": Array<{
                "iStep": {
                    "submitter": boolean
                    "closeForm": boolean
                    "validatorGroup": string
                }
                "stepTask": {
                    "text": string
                }
                "newTcPlatform": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "task": {
                    "text": string
                }
                "expect": {
                    "text": string
                }
                "photoUpload": {
                    "photos": Array<{
                        "photoId": string
                        "mediaId": string
                    }>
                }
                "hasPhoto": number
                "mediaIdPhoto": string
                "stepCount": number
            }>
        }
        "currentStep": number
        "edit": number
        "deletedStep": number
        "stfromForm": string
        "originalTestId": string
        "user_proj": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_testers extends __form_base_type {
        "tester_table": {
            "rows": Array<{
                "tb_tester_name": {
                    "text": string
                }
                "tb_tester_email": {
                    "text": string
                }
                "role_table": {
                    "rows": Array<{
                        "drRole": {
                            "selectedKey": string
                            "selectedText": string
                            "selectedValue": {
                                "v": string
                            }
                        }
                        "newProj": {
                            "selectedKey": string
                            "selectedText": string
                            "selectedValue": {
                                "project": string
                            }
                        }
                        "projName": {
                            "text": string
                        }
                    }>
                }
                "btnSaveRoles": {
                    "submitter": boolean
                    "closeForm": boolean
                    "validatorGroup": string
                }
                "drWork": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "drActive": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "part": {
                    "number": number
                }
                "bDelete": boolean
            }>
        }
        "user_proj": string
        "stLoggedUserRole": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_testingStatus extends __form_base_type {
        "adminPanel": {
            "saveChange": {
                "submitter": boolean
                "closeForm": boolean
                "validatorGroup": string
            }
            "saveOrder": {
                "submitter": boolean
            }
            "cond": boolean
        }
        "tasks": {
            "rows": Array<{
                "editButton": {
                    "cond": boolean
                }
                "editedResult": {
                    "selectedKey": number
                    "selectedText": string
                    "selectedValue": {
                        "code": number
                        "text": string
                    }
                }
                "editedOrder": {
                    "text": string
                }
                "edit": boolean
                "id": string
            }>
        }
        "stLoggedUserRole": string
        "editOrder": boolean
        "user_proj": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_testcase_monitor extends __form_base_type {
        "createReport": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "to": {
            "text": string
        }
        "addtest": {
            "saveMissingTests": {
                "submitter": boolean
                "closeForm": boolean
                "validatorGroup": string
            }
            "tbNewLb": {
                "rows": Array<{
                    "add_tcs_id": {
                        "text": string
                    }
                    "add_tcs_dc": {
                        "text": string
                    }
                    "add_tcs_platform": {
                        "selectedKey": string
                        "selectedText": string
                        "selectedValue": {
                            "v": string
                        }
                    }
                    "add_tcs_time": {
                        "number": number
                    }
                    "add_tcs_tags": {
                        "selectedTags": Array<{
                            "v": string
                        }>
                    }
                    "add_tcs_link": {
                        "text": string
                    }
                }>
            }
        }
        "sbsave": {
            "submitter": boolean
        }
        "tcTable": {
            "idSc": {
                "text": string
            }
            "descSc": {
                "text": string
            }
            "platSc": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "v": string
                }
            }
            "tagsSc": {
                "selectedTags": Array<{
                    "v": string
                }>
            }
            "dateSc": {
                "date": dtl
            }
            "rows": Array<{
                "tcId": {
                    "text": string
                }
                "tcEditedDesc": {
                    "text": string
                }
                "tcDesc": {
                    "text": string
                }
                "tcPlatform": {
                    "text": string
                }
                "editedTags": {
                    "selectedTags": Array<{
                        "v": string
                    }>
                }
                "nbEditedTime": {
                    "number": number
                }
                "tcTime": {
                    "text": string
                }
                "tcEditedLink": {
                    "text": string
                }
                "newTcId": {
                    "text": string
                }
                "newTcDesc": {
                    "text": string
                }
                "newTcPrecond": {
                    "text": string
                }
                "maxStep": number
                "tcAdded": {
                    "text": string
                }
                "edited": boolean
                "tags": Array<{
                    "tag": string
                }>
                "delete": boolean
            }>
        }
        "iLabelEditedRows": number
        "letpage": number
        "stscTags": string
        "stavailableTags": string
        "stLoggedUserRole": string
        "user_proj": string
        "tcCount": number
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_tclinks extends __form_base_type {
        "selected_tester": {
            "selectedKey": string
            "selectedText": string
            "selectedValue": {
                "tester_name": string
            }
        }
        "selected_environment": {
            "selectedKey": string
            "selectedText": string
            "selectedValue": {
                "env_name": string
            }
        }
        "assignBtn": {
            "submitter": boolean
        }
        "save_tags": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "wipe_assignement": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "prMove": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "prDelete": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "assignedTb": {
            "rows": Array<{
                "move_task": {
                    "text": string
                }
                "move_task_guid": {
                    "text": string
                }
                "selected_environment_to_move": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "env_name": string
                    }
                }
                "edited": boolean
                "delete": boolean
            }>
        }
        "tcs": {
            "filter_taskid": {
                "text": string
            }
            "filter_desc": {
                "text": string
            }
            "filter_platform": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "v": string
                }
            }
            "tag_filter": {
                "text": string
            }
            "assigned_date_filter": {
                "date": dtl
            }
            "tvDelete": {
                "text": string
            }
            "rows": Array<{
                "mark_to_run": {
                    "checked": boolean
                }
                "tcsid": {
                    "text": string
                }
                "tcsdesc": {
                    "text": string
                }
                "tcsplatform": {
                    "text": string
                }
                "tags_ctr": {
                    "selectedTags": Array<{
                        "v": string
                    }>
                }
                "last_status": {
                    "text": string
                }
                "last_sent_in": {
                    "text": string
                }
                "time_need": {
                    "text": string
                }
                "last_assigned": {
                    "text": string
                }
                "bToDelete": boolean
                "already_selected": number
            }>
        }
        "let_tags": Array<{
            "tag": string
        }>
        "letpage": number
        "adntc": boolean
        "testCount": number
        "iLabelEditedRows": number
        "iLabelDeletedRows": number
        "selectedTestsTable": Array<{
            "id": string
            "tc_description": string
            "platform": string
            "link": string
            "time": number
            "lastAssigned": string
        }>
        "user_proj": string
        "currentVersion": string
        "all_selected_tests": Array<{
            "guid": string
            "task_id": string
            "result": string
            "platformID": string
        }>
        "selected_tests": Array<{
            "guid": string
            "task_id": string
            "result": string
            "platformID": string
        }>
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_version_control extends __form_base_type {
        "addNewProj": {
            "newProjectName": {
                "text": string
            }
            "newProjFirstVersionName": {
                "text": string
            }
            "sbnewProjectName": {
                "submitter": boolean
            }
        }
        "addNewVer": {
            "newVersionProject": {
                "selectedKey": string
                "selectedText": string
                "selectedValue": {
                    "project": string
                }
            }
            "newVersionName": {
                "text": string
            }
            "sbnewVersionName": {
                "submitter": boolean
            }
        }
        "selectedproject": {
            "selectedKey": string
            "selectedText": string
            "selectedValue": {
                "project": string
            }
        }
        "versionsTable": {
            "rows": Array<{
                "version": {
                    "text": string
                }
                "setTesting": {
                    "submitter": boolean
                    "closeForm": boolean
                    "validatorGroup": string
                }
            }>
        }
        "user_proj": string
        "submissionTitle": string
        "submitButton": any
    }
}
declare global {
    interface form_testcase_writer extends __form_base_type {
        "adminPanel": {
            "sbSaveToDb": {
                "submitter": boolean
                "closeForm": boolean
                "validatorGroup": string
            }
            "tcCat": {
                "rows": Array<{
                    "categoryNew": {
                        "text": string
                    }
                    "category": {
                        "text": string
                    }
                    "plannedNew": {
                        "number": number
                    }
                    "editedptcount": {
                        "number": number
                    }
                    "activeNew": {
                        "checked": boolean
                    }
                    "activeEdited": {
                        "checked": boolean
                    }
                    "testCount": number
                    "progress": number
                    "isNew": boolean
                    "edited": boolean
                    "editedptc": boolean
                    "toDelete": boolean
                    "toReopen": boolean
                    "inProgressTcCount": number
                }>
            }
            "cond": boolean
        }
        "drDoneTests": {
            "selectedKey": string
            "selectedText": string
            "selectedValue": {
                "category": string
            }
        }
        "assignBtn": {
            "submitter": boolean
        }
        "sbCloseCategory": {
            "submitter": boolean
            "closeForm": boolean
            "validatorGroup": string
        }
        "sbSaveEditedLabels": {
            "submitter": boolean
        }
        "categoryClosedStatusTester": number
        "categoryClosedStatusFinished": number
        "addTcBtn": {
            "submitter": boolean
        }
        "tbNewLb": {
            "rows": Array<{
                "add_tcs_id": {
                    "text": string
                }
                "add_tcs_lb": {
                    "text": string
                }
                "add_tcs_status": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "add_tcs_ty": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "add_tcs_platform": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "add_tcs_lc": {
                    "text": string
                }
                "add_tcs_tags": {
                    "selectedTags": Array<{
                        "v": string
                    }>
                }
                "add_tcs_note": {
                    "text": string
                }
            }>
        }
        "tcDone": {
            "rows": Array<{
                "editedId": {
                    "text": string
                }
                "tcDoneId": {
                    "text": string
                }
                "editedLabel": {
                    "text": string
                }
                "editedStatus": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "editedType": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "editedPlatform": {
                    "selectedKey": string
                    "selectedText": string
                    "selectedValue": {
                        "v": string
                    }
                }
                "editedLocation": {
                    "text": string
                }
                "editedTags": {
                    "selectedTags": Array<{
                        "v": string
                    }>
                }
                "editTickets": {
                    "rows": Array<{
                        "editedTicket": {
                            "text": string
                        }
                    }>
                }
                "editedNote": {
                    "text": string
                }
                "edit": boolean
                "edited": boolean
                "delete": boolean
                "tags": Array<{
                    "tag": string
                }>
            }>
        }
        "stLoggedUserRole": string
        "iFinishedStatusEdit": number
        "bNewTestCaseAdded": boolean
        "iNewTestCaseAdded": number
        "bNewLabelAdded": boolean
        "iLabelEditedRows": number
        "adnlb": boolean
        "user_proj": string
        "currentVersion": string
        "unfinishedCategoryCount": number
        "saveEdit": boolean
        "submissionTitle": string
        "submitButton": any
    }
}
