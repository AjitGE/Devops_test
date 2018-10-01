import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

  public static readonly APP_TITLE: string = 'apt-client';
  public static readonly APP_HEADER_TEXT: string = 'AAdvantage Promotions Tool';

  // Health Component
  public static readonly HEALTH_ERR_MSG = 'Not able to connect to services';

  // Top - Search box Component
  public static readonly PROMOPSTPA_LABEL: string = 'Promo / PST / TA Code';
  public static readonly CURRPROMOSONLY_TOP_LABEL: string = 'Current promos only';
  public static readonly REQUIRED_TEXT: string = 'Required';
  public static readonly SPECIALCHAR_NA: string = 'Special characters not allowed';
  public static readonly LEAST2CHAR_TEXT: string = 'Enter at least 2 characters';
  public static readonly MAX5CHAR_TEXT: string = 'A max of 5 characters can be entered';
  public static readonly MINLENTH_CHAR_TOPSEARCH: number = 2;
  public static readonly MAXLENGTH_CHAR_TOPSEARCH: number = 5;
  public static readonly CHARS_ALLOWED_TOPSEARCH: string = '[a-zA-Z0-9]*';

  // Bottom - Search Criteria Component
  public static readonly PARAM_SEPARATOR: string = '/';
  // Keywords
  public static readonly KEYWORD_LABEL: string = 'Keywords';
  public static readonly KEYWORD_SUB_LABEL: string = ' (max of 5; separated by commas)';
  public static readonly MAX300CHAR_TEXT: string = 'Max of 300 characters can be entered';
  public static readonly TOTAL_KEYWORDS_ALLOWED: number = 4;
  public static readonly SINGLE_KEYWORD_MAXCHAR_PERLINE: number = 26;
  public static readonly MAX300CHAR: number = 300;
  public static readonly KEYWORD_ALLOWED_CHAR: string = '[a-zA-Z0-9, ]*';
  public static readonly KEYWORD_ALERT_MAX_MSG: string = 'A max of 5 keywords can be entered';
  public static readonly KEYWORD_DEFAULT_TOSEND: string = 'N@KEYWORDS/';
  public static readonly KEYWORD_SEPARATOR: string = ',';
  // Dates
  public static readonly EFFDATERANGE_LABEL: string = 'Effective date range';
  public static readonly TO_LABEL: string = 'to';
  public static readonly CALENDARPICKER_THEME: string = 'theme-dark-blue';
  public static readonly CALENDARPICKER_FORMAT: string = 'MM/dd/yyyy';
  public static readonly MAXYEARS_TOSEARCH: number = 2;
  public static readonly USDATEPATTERN: any = /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/;
  public static readonly DATE_NOSLASH_FORMAT: string = 'MMddyyyy';
  public static readonly DATEPIPE_US: string = 'en-US';
  public static readonly DATEGREATER_ERR_MSG: string = 'Start date cannot be greater than end date';
  public static readonly DATEFORMAT_ERR_MSG: string = 'Date format should be MM/DD/YYYY';
  public static readonly DATERANGE_ERR_MSG: string = 'Searches must be within 2 years';
  public static readonly FROMDATE_DEFAULT_TOSEND: string = 'NOFROMDATE/';
  public static readonly TODATE_DEFAULT_TOSEND: string = 'NOTODATE/';
  // Misc
  public static readonly MISC_LABEL: string = 'Misc search options:';
  public static readonly TARGETONLY_LABEL: string = 'Targeted Only';
  public static readonly NONTARGETONLY_LABEL: string = 'Non-Targeted Only';
  public static readonly CURRPROMOSONLY_BOTTOM_LABEL: string = 'Current promos Only';
  public static readonly TARGETRADIO_DEFAULT_VALUE: string = 'TARGETNOTSELECTED';
  public static readonly CURRPROMOS_BOTTOM_SELECTED: string = 'BCURRPROMOSELECTED/';
  public static readonly CURRPROMOS_BOTTOM_NOT_SELECTED: string = 'BCURRPROMONOTSELECTED/';
  // PartnerCodes
  public static readonly PARTNERCODES_LABEL: string = 'Partner codes';
  public static readonly PARTNERCODES_ALLOWED_CHAR: string = '[a-zA-Z]*';
  public static readonly PARTNERCODES_DEFAULT_TOSEND: string = 'NOPARTNERCODES';
  // Buttons
  public static readonly SEARCHBUTTON_LABEL: string = 'Search';
  public static readonly CLEARALLBUTTON_LABEL: string = 'Clear all';

  // Pagination
  public static readonly PAGINATION_PAGENUM_DEFAULT: number = 1;
  public static readonly PAGINATION_NO_OF_PROMOS: number = 10;

  // SearchResults
  public static readonly NORESPONSE_ERR_MSG = '<h5>No Response from Ventana/LSCS</h5>';
  public static readonly BOTTOM_SEARCH_NOSEL_MSG = 'You must enter at least one search requirement';
  public static readonly NOPROMO_RESPONSE_MSG = 'No matching Promotions in Ventana/LSCS';


  static Role = class {
    public static readonly ADMIN = 'ROLE_ADMIN';
  };
}
