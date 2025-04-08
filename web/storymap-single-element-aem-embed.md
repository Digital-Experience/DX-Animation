{STORYMAPID} The ID for your StoryMap -- embed settings in the StoryMap must also be updated with the web server information.

```

<div class="storymaps-root" style="width: 100vw;height:calc(100vw * (9/16));overflow:hidden;" ></div>
<script
  id="embed-script"
  src="https://storymaps.arcgis.com/embed/view"
  data-story-id="{STORYMAPID}"
  data-root-node=".storymaps-root"
  data-blockid="<>"
></script>

<style>
.storymaps-root {
  margin-top: -64px;
  max-height: 90vh;
  position:relative;
  z-index:0;
}
#bottomGrid{position:relative;z-index:1;}
@media (max-width: 768px) {
  .storymaps-root {
    margin-top: -32px;
  }
}
</style>

```