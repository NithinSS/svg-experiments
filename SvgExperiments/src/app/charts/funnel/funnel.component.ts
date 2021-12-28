import { Component, Input, OnInit } from '@angular/core';

export interface FunnelBlock {
  label: string;
  percentage: number;
}

/** Custom svg form funnel chart. Styles are configurable via css and properties
 * are hardcoded for now.
 */
@Component({
  selector: 'funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.scss']
})
export class FunnelComponent implements OnInit {

  BLOCK_HEIGHT = 110;

  /** Top width of the top most block */
  MAX_WIDTH = 500;
  private funnelAngle = 70; // degrees - non-zero positive number
  /** The absolute difference between top and bottom widths of trapezoid **/
  WIDTH_DECREMENT: number = 0;


  /** Number of elements of `data` for quick access **/
  totalLength: number = 0;
  _data: FunnelBlock[] = [];
  get data(): FunnelBlock[] {
    return this._data;
  }
  @Input() set data(data: FunnelBlock[]) {
    this._data = data;
    this.totalLength = this.data?.length;
  }

  constructor() { }

  ngOnInit(): void {
    this.WIDTH_DECREMENT = this.BLOCK_HEIGHT / Math.tan(this.funnelAngle * Math.PI / 180);
  }

}
